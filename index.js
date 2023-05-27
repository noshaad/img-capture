const express = require('express');
const siteRoutes = require('./router/site');
const app = express();

app.use(siteRoutes)

app.listen(3000);
