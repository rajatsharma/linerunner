var express = require('express');
var router = express.Router();
var simplify = require('simplify-geojson');
var request = require('request');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'LineRunner' });
});

router.get('/geoJsonUrl/:url/tolerance/:tol', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  request(req.params.url, function(error, response, body) {
    res.send(simplify(JSON.parse(body), req.params.tol));
  });
});

module.exports = router;
