'use strict';

var request = require('request');
var simplify = require('simplify-geojson');
var { ReverseGeocode } = require('../routines/promises');
var country = require('countryjs');

const CrossOriginResponse = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
};

const CoreLineRunner = (req, res, next) => {
    ReverseGeocode({ lat: req.body.lat, lng: req.body.lng })
        .then(location => location.results[0].components.country_code.toUpperCase())
        .then(countryCode => country.geoJSON(countryCode))
        .then(geojson => req.body.rdp && simplify(geojson,1) || geojson)
        .then(simplifiedJson=>res.send(simplifiedJson))
        .catch(err=>res.send(err));
};

const LineRunnerLegacy = (req, res, next) => {
    request(req.params.url, function (error, response, body) {
        res.send(simplify(JSON.parse(body), req.params.tol));
    });
};

module.exports = { CrossOriginResponse, CoreLineRunner, LineRunnerLegacy };
