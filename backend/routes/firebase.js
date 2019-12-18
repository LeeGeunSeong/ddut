var express = require("express");
var router = express.Router();
var db = require("./db");
var cors = require("cors");
var ref = db;
var crawl = require("./crawling");

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
      ref.set(res).then(() => {
        console.log("save success");
      });
    });
}, 60000);
/*
router.get('/boardDelete', function(req,res,next){
    firebase.database().ref('board/' + req.query.brdno).remove();
    res.redirect('boardList');
}); */

module.exports = router;
