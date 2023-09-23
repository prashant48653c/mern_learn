const jwt=require("jsonwebtoken")
const User = require("../models/userSchema")

const Authenticate=async (res,req,next)=>{
try{
    const token=await req.cookie.token
    console.log(token)
        const verifyToken=  jwt.verify(token,process.env.SECRET_KEY)
        const rootUser=await User.findOne({_id:verifyToken._id,"tokens:token":token})
        if(!rootUser)
        {
            req.token=token;
        }

}catch(err){
    res.status(401).send("Unauthorized")
    console.log(err)

}

}

module.exports=Authenticate