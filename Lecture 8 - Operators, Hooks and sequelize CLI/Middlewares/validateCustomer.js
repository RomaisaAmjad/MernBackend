    exports.validateCustomer=(req,res,next)=>{
    const{name,email,password,gender}=req.body;

    if(!name || !email || !password || !gender){
        return res.status(400).send("ERROR: name, email, password and gender are required!");
    }
    if(gender !=="Male" && gender !=="Female"){
        return res.status(400).send("Gender must be specifies as Male of Female format!")
    }
    
    next();
}