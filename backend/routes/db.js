var express = require('express');
var router = express.Router();
var firebase = require("firebase");
 
router.get('/', function(req, res, next) {
    res.redirect('naver');
});
 
var firebaseConfig = {
    apiKey: "AIzaSyCnL3VW5FKqSfY8rsudhw9G9nRfCn4naCg",
    authDomain: "ddut-c4cf1.firebaseapp.com",
    databaseURL: "https://ddut-c4cf1.firebaseio.com",
    projectId: "ddut-c4cf1",
    storageBucket: "ddut-c4cf1.appspot.com",
    messagingSenderId: "492850639209",
    appId: "1:492850639209:web:28cdd4c2046375b4e94df8",
    measurementId: "G-8SZEX8GQ7C"
  };
firebase.initializeApp(firebaseConfig);

var ref = firebase.database().ref();

module.exports = ref;