'use strict';

var express = require('express');
var router = express.Router();
var simplify = require('simplify-geojson');
var request = require('request');
var { CrossOriginResponse, CoreLineRunner, LineRunnerLegacy } = require('../routines/requesthandlers');

/* GET home page. */
router.get('*', CrossOriginResponse);

/**
 * @api {post} /core Main LineRunner
 * @apiName LineRunner
 * @apiGroup Core
 *
 * @apiParam {String} lat Latitude of location.
 * @apiParam {String} lng Longitude of location.
 * @apiParam {Boolean} rdp Flag to apply RDP or not.
 * @apiParamExample {json} Request-Example:
 *  {
 *	   "lat":"17.426585",
 *	   "lng":"78.445360",
 *	   "rdp":true
 *  }
 * @apiSuccess {json} FeatureCollection Vector Geometry of the Country, supplied co-ordinates belongs to.
 */
router.post('/core', CoreLineRunner);

/**
 * @api {get} /geoJsonUrl/:url/tolerance/:tol Legacy Linerunner
 * @apiName LineRunnerLegacy
 * @apiGroup Core
 *
 * @apiParam {String} url Url of the Remote Geojson. Can be used to simplify any geojson
 * @apiParam {Number} tol Tolerance of the Simplification, much to less. 1 is less simplified
 *
 * @apiSuccess {json} FeatureCollection Vector Geometry of the Country, supplied co-ordinates belongs to.
 */
router.get('/geoJsonUrl/:url/tolerance/:tol', LineRunnerLegacy);

module.exports = router;
