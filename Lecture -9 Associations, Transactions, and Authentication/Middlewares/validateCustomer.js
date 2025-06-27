const joi = require("joi");
const customerSchema = joi.object({
    name: joi.string().min(3).max(30).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).max(20).required(),
    gender: joi.string().required()
});
const validateCustomer=(req,res,next)=>{
    const{error,value} = customerSchema.validate(req.body);
    if(error){
        return res.status(400).send(error.details[0].message);
    }
    req.body=value;
    next();
}
    
module.exports ={validateCustomer};
    
    
    