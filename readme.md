# LineRunner v0.1.0

API Documentation

- [Core](#core)
	- [Main LineRunner](#main-linerunner)
	- [Legacy Linerunner](#legacy-linerunner)
	


# Core

## Main LineRunner



	POST /core


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| lat			| String			|  <p>Latitude of location.</p>							|
| lng			| String			|  <p>Longitude of location.</p>							|
| rdp			| Boolean			|  <p>Flag to apply RDP or not.</p>							|

## Legacy Linerunner



	GET /geoJsonUrl/:url/tolerance/:tol


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| url			| String			|  <p>Url of the Remote Geojson. Can be used to simplify any geojson</p>							|
| tol			| Number			|  <p>Tolerance of the Simplification, much to less. 1 is less simplified</p>							|


