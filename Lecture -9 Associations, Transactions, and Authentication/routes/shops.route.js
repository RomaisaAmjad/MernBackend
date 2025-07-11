const {Router} = require('express');
const {validateShop} = require('../middlewares/validateShop.middleware.js');

const router = Router(); 
const productRouter = require('./product.route');
const controller = require('../controllers/shop.controller');
const checkShop = require('../middlewares/checkShopId.middleware');

router.get('/',controller.get);
router.post('/',validateShop,controller.post); // if we donot send back response then we can make a chain of controllers here; each of it calling its next onw
router.use('/:shopId/products',checkShop,productRouter);

module.exports = router;