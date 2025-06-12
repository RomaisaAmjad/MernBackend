const {Router} = require('express');

const router = Router(); 
const controller = require('../Controllers/shop');

router.get('/',controller.get);
router.post('/',controller.post);


module.exports = router;