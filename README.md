# Run
**Requirements**
To start development mode, requires global installations of nodemon and json-server.

1. npm install-all-deps
2. npm run dev

This starts up 3 services:
1. json-server serving a clone of the countrylayer.com data set
2. Express server that is proxy between the React front-end and the json-server
3. SPA React client that calls the Express server for cached country data

## Contents

**/client** 
* Create React App front-end that pulls country details from the Express backend

**/server**
* JSON-Server represents countrylayer.com free public dataset as of 02/13/2022
* Express server serving as a proxy between the React front-end and the JSON-Node server
* Data is pulled from the JSON-Server and cached locally in the Express server (TTL of 7 days)

**/nosql-model**
* Simple Example Continent NOSql data model in JSON format

