const {Router} = require('express');
const {validateCustomer} = require('../middlewares/validateCustomer.middleware.js');

const router = Router(); 
const controller = require('../controllers/customer.controller');

const checkCustomer= require('../middlewares/checkCustomerId.middleware.js');

router.get('/',controller.get);
router.get('/:customerId',checkCustomer,controller.getOne);
router.post('/',validateCustomer,controller.signup);
router.post('/login',controller.login);

module.exports = router;