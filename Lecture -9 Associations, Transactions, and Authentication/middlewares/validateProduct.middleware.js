
const joi = require("joi");
const productSchema = joi.object({
    name: joi.string().min(3).max(30).required(),
    price:joi.number().required()
})
const validateProduct=(req,res,next)=>{
    const{error,value} = productSchema.validate(req.body);
    if(error){
        return res.status(400).send(error.details[0].message);
    }
    req.body=value;
    next();
}

module.exports = {validateProduct};
    
    
    
    