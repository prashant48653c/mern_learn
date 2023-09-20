const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,

    },
    work: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,

    },
    cpassword: {
        type: String,
        required: true,

    },

})




// hashing using bcrypt 

userSchema.pre('save', async function (next) {
    console.log("Hashing the password")
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12)
        this.cpassword = await bcrypt.hash(this.cpassword, 12)

    }
    next();
})


userSchema.method.generateAuthToken =async function(){
    try{
let token=jwt.sign({_id:this._id},process.env.SECRET_KEY)
    }catch(err){
        console.log(err)
    }
}

const User = mongoose.model("User", userSchema)

module.exports = User