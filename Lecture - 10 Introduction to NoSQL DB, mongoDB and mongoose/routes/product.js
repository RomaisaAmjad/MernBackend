const {Router} = require('express');
const products = require('../models/index');
const path = require('path');
const controller = require('../controllers/product');

const router = Router(); 
// /produts/products
router.get('/',controller.get);
router.get('/:productid',controller.getOne);
router.post('/',controller.post);
router.put('/:productid',controller.put);
router.delete('/:productid',controller.delete);


module.exports = router;