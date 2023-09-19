const mongoose=require("mongoose")

const connectDB=async(DB)=>{
    mongoose.connect(DB,{
        useUnifiedTopology:true,
        useNewUrlParser:true,
         
    }).then(()=>console.log("Mongo connected")).catch((err)=>console.log(`Mongo problem ${err}`))
}


module.exports=connectDB