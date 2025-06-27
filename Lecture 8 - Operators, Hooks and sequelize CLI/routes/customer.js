const {Router} = require('express');
const {validateCustomer} = require('../Middlewares/validateCustomer');

const router = Router(); 
const controller = require('../Controllers/customer');

router.get('/',controller.get);
router.post('/',validateCustomer,controller.signup);

module.exports = router;