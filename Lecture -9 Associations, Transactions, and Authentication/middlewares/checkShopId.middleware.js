const {shops:Shops} = require("../models")
module.exports = async function(req,res,next){
    try{
        const {shopId} = req.params;
        const shop = await Shops.findByPk(shopId);
        if(!shop){
            res.status(404).send("Shop not found")
        }
        req.shop = shop; // if we want shop id we will be getting it from req.shop not req.params
        next();

    }catch(err){
        res.status(500).send(console.log(err));
    }
}