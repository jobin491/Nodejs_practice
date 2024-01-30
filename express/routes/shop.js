const path = require('path');

const rootDir = require('../util/path');
const adminData = require('./admin');

const express = require('express');

const router = express.Router();

router.get('/',(req,res,next)=>{
    res.render('shop',{ docTitle:'shop'});
});

module.exports = router;