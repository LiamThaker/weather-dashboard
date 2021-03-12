var express = require('express');
var router = express.Router();

/* GET api listing. */
router.get('/', function (req, res, next) {
    res.json({
        message: "Hello /api route"
    })
});

module.exports = router;
