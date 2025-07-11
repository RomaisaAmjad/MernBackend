const {Router} = require('express');

const router = Router(); 
const controller = require('../controllers/shop');

router.get('/',controller.get);


module.exports = router;