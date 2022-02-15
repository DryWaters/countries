# Run
**Requirements**
To start development mode, requires global installations of nodemon and json-server.

1. Add countrylayer.com API key to ./server/.env
2. npm install-all-deps
3. npm run dev

This starts up 2 services:
2. Express server that is proxy between the React front-end and the json-server
3. SPA React client that calls the Express server for cached country data

## Contents

**/client** 
* Create React App front-end that pulls country details from the Express backend

**/server**
* Express server serving as a proxy between the React front-end and the countrylayer.com API server
* Data is pulled from the JSON-Server and cached locally in the Express server (TTL of 10 days)

**/nosql-model**
* Simple Example Continent NOSql data model in JSON format

