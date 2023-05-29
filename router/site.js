const express = require('express');
const router  = express.Router();
const siteController = require("../controller/site");

router.get('/',siteController.getHello)
// router.get('/hello',siteController.getIndex)



module.exports = router;