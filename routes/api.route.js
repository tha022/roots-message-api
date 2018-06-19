var express = require('express')

var router = express.Router()
var audience = require('./api/audience.route')


router.use('/audience', audience);


module.exports = router;