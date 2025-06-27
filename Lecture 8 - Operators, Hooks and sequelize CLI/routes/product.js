const {Router} = require('express');
const controller = require('../Controllers/product');
const {validateProduct} = require('../Middlewares/validateProduct');

const router = Router(); 
// /produts/products
router.get('/',controller.get);
router.post('/',validateProduct,controller.post);
router.put('/:productid',controller.put);
router.delete('/:productid',controller.delete);
router.get('/:productid',controller.getOne);


module.exports = router;