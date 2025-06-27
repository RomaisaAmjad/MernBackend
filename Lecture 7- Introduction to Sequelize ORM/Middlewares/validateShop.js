exports.validateShop=(req,res,next)=>{
    const{name,price}=req.body;

    if(!name|| !price ){
        return res.status(400).send("ERROR: name,and price are required!");
    }
    next();
}