var express = require('express');
var router = express.Router();
var db = require('./db')
var ref = db;


router.get('/naver', function(req, res, next) {
    ref.child('naver').orderByKey().once('value', function(data) {
        var rows = [];
        data.forEach(function(childData) {
            rows.push(childData.val());
        });
        res.send(rows)
        // res.render('board1/boardList', {rows: rows});
    });
});
 
/* router.get('/boardRead', function(req, res, next) {
    firebase.database().ref('board/'+req.query.brdno).once('value', function(snapshot) {
        var childData = snapshot.val();
         
        childData.brdno = snapshot.key;
        childData.brddate = dateFormat(childData.brddate, "yyyy-mm-dd");
        res.render('board1/boardRead', {row: childData});
    });
});
 
router.get('/boardForm', function(req,res,next){
    if (!req.query.brdno) {
        res.render('board1/boardForm', {row: ""});
        return;
    }
 
    firebase.database().ref('board/'+req.query.brdno).once('value', function(snapshot) {
        var childData = snapshot.val();
         
        childData.brdno = snapshot.key;
        res.render('board1/boardForm', {row: childData});
    });
});
 
router.post('/boardSave', function(req,res,next){
    var postData = req.body;
    if (!postData.brdno) {
        postData.brdno = firebase.database().ref().child('posts').push().key;
        postData.brddate = Date.now();
    } else {
        postData.brddate = Number(postData.brddate); 
    }
    firebase.database().ref('board/' + req.body.brdno).set(req.body);
    //var updates = {};
    //updates['/board/' + postData.brdno] = postData;
    //firebase.database().ref().update(updates);
     
    res.redirect('boardList');
});
 
router.get('/boardDelete', function(req,res,next){
    firebase.database().ref('board/' + req.query.brdno).remove();
    res.redirect('boardList');
}); */
 
module.exports = router;
