var express = require("express");
var router = express.Router();
<<<<<<< HEAD
var db = require('./db')
=======
var db = require("./db");
var cors = require("cors");
>>>>>>> a035e8777e0852d99b5014b2a044c646055ffa11
var ref = db;
var crawl = require("./crawling");

<<<<<<< HEAD
router.get('/naver', function(req, res, next) {
    ref.child('naver').orderByKey().once('value', function(data) {
        var rows = [];
        data.forEach(function(childData) {
            rows.push(childData.val());
        });
        res.send(rows)
        console.log(rows)
        // res.render('board1/boardList', {rows: rows});
=======
router.get("/naver", cors(), function(req, res, next) {
  ref
    .child("naver")
    .orderByKey()
    .once("value", function(data) {
      var rows = [];
      data.forEach(function(childData) {
        rows.push(childData.val());
      });
      res.send(rows);
>>>>>>> a035e8777e0852d99b5014b2a044c646055ffa11
    });
});
router.get("/daum", cors(), function(req, res, next) {
  ref
    .child("daum")
    .orderByKey()
    .once("value", function(data) {
      var rows = [];
      data.forEach(function(childData) {
        rows.push(childData.val());
      });
      res.send(rows);
    });
});
router.get("/nate", cors(), function(req, res, next) {
  ref
    .child("nate")
    .orderByKey()
    .once("value", function(data) {
      var rows = [];
      data.forEach(function(childData) {
        rows.push(childData.val());
      });
      res.send(rows);
    });
});
router.get("/zum", cors(), function(req, res, next) {
  ref
    .child("zum")
    .orderByKey()
    .once("value", function(data) {
      var rows = [];
      data.forEach(function(childData) {
        rows.push(childData.val());
      });
      res.send(rows);
    });
});

setInterval(() => {
    var crawlData = crawl()
      .then(function(data) {
        return data;
      })
      .then(res => {
        ref.set(res).then(()=>{console.log('save success')});
       });
}, 60000);
/*
router.get('/boardDelete', function(req,res,next){
    firebase.database().ref('board/' + req.query.brdno).remove();
    res.redirect('boardList');
}); */

module.exports = router;
