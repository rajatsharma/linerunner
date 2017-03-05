'use strict';

var express = require('express');
var router = express.Router();
var simplify = require('simplify-geojson');
var request = require('request');
var { CrossOriginResponse, CoreLineRunner, LineRunnerLegacy } = require('../routines/requesthandlers');

/* GET home page. */
router.get('*', CrossOriginResponse);
router.post('/core', CoreLineRunner);
router.get('/geoJsonUrl/:url/tolerance/:tol', LineRunnerLegacy);

module.exports = router;
