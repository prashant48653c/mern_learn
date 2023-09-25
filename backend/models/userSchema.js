const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


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
    messege:[
        {
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
        feedback: {
            type: String,
            required: true,
            trim: true
        },
        location:{
            type:String,
            required:true
        }
    }
       
    ],
    tokens: [
        {
            token: {
                type: String,
                required: true

            }
        }
    ]

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


userSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({ token: token })
        await this.save()
        return token
    } catch (err) {
        console.log(err)
    }
}

userSchema.methods.takeMessege=async function(){

}

const User = mongoose.model("User", userSchema)

module.exports = User