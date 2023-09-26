
const express=require("express")
const Jwt = require("jsonwebtoken")

const User = require("../models/userSchema")

const Authenticate = async (req, res, next) => {
    try {
        const token = await req?.cookies?.jwtoken;
        const verifyToken = Jwt.verify(token, process.env.SECRET_KEY)
        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token })
        if (!rootUser) {
            throw new Error("User not found")
        } else {
            req.token = token;
            req.rootUser = rootUser;
            req.userID = rootUser._id;
            
        }
        next()

    } catch (err) {
      
        console.log(err)
        res.status(401).json({ error: "User not Found " });

    }

}

module.exports = Authenticate