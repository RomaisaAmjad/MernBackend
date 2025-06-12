const {Router} = require('express');
const products = require('../models/index');
const path = require('path');
const controller = require('../Controllers/product');

const router = Router(); 
// /produts/products
router.get('/',controller.get);
router.post('/',controller.post);
router.put('/:productid',controller.put);
router.delete('/',controller.delete);


module.exports = router;