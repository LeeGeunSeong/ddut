var express = require('express');
var router = express.Router();
<<<<<<< HEAD
var app = express();
=======
>>>>>>> a035e8777e0852d99b5014b2a044c646055ffa11

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var fb = require("./firebase")

router.use('/ranking',fb)

module.exports = router;
