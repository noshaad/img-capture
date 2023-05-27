const express = require('express');
const router  = express.Router();
const siteController = require("../controller/site");

router.get('/hello',siteController.getHello)
router.get('/',siteController.getIndex)



module.exports = router;