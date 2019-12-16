var express = require('express');
var router = express.Router();
var cors = require('cors');
var app = express();

// CORS 설정
app.use(cors());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var fb = require("./firebase")

router.use('/ranking',fb)

module.exports = router;
