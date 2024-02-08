const express = require('express');

const path = require('path');

const rootDir = require('../util/path')//useless

const productsController = require('../controllers/products');

const router = express.Router();

const products = [];

router.get('/add-product',productsController.getAddProduct);

router.post('/add-product',productsController.postAddProduct);

module.exports=router;





// router.get('/add-product',(req,res,next)=>{
//     res.sendFile(path.join(rootDir,'views','add-product.html'));  
// });