const express = require('express');
const siteRoutes = require('./router/site');
const app = express();
const path = require('path');
console.log((path.join(__dirname, 'screenshots')))

app.use("/screenshots", express.static(__dirname + '/screenshots'));

app.use(siteRoutes)

app.listen(3001);
