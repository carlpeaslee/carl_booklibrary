var express = require("express");
var router = express.Router();
var path = require("path");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/carl_library1');
mongoose.model("book", new Schema({"title" : String, "author" : String, "pubdate" : String, "imageurl" : String,}));
var Book = mongoose.model("book");


router.get('/books', function (req, res) {
    Book.find({}, function(err, data){
        if(err){
            console.log(err);
        }
        res.send(data);
    });
});

router.post("/books", function (req, res) {
    console.log(req.body);
    var addedBook = new Book({"title" : req.body.title, "author" : req.body.author, "pubdate" : req.body.pubdate, "imageurl" : req.body.imageurl});
    addedBook.save(function(err, data){
        if(err){
          console.log(err);
        }

        res.send(data);
    });
});

router.delete("/books/:id", function (req, res) {
    console.log(req.params.id);
    Book.find({ _id: req.params.id }).remove( function(err, data) {
        if(err){
          console.log(err);
        }

        res.send(data);
    });
});

router.get("/*", function(req,res){
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "../public/", file));
});

module.exports = router;
