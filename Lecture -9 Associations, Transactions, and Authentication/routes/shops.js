const {Router} = require('express');
const {validateShop} = require('../Middlewares/validateShop');

const router = Router(); 
const productRouter = require('./product');
const controller = require('../Controllers/shop');
const checkShop = require('../Middlewares/checkShopId');

router.get('/',controller.get);
router.post('/',validateShop,controller.post); // if we donot send back response then we can make a chain of controllers here; each of it calling its next onw
router.use('/:shopId/products',checkShop,productRouter);

module.exports = router;