const {Router} = require('express');
const {validateShop} = require('../Middlewares/validateShop');

const router = Router(); 
const controller = require('../Controllers/shop');

router.get('/',controller.get);
router.post('/',validateShop,controller.post);

module.exports = router;