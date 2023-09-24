const jwt = require("jsonwebtoken")
const express=require("express")
const User = require("../models/userSchema")

const Authenticate = async (res, req, next) => {
    try {
        const token = await req.cookies.jwtoken
        console.log(token)
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY)
        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens:token": token })
        if (!rootUser) {
            throw new Error("User not found")
        } else {
            req.token = token;
            req.rootUser = rootUser;
            req.userId = rootUser._id;
            next()
        }

    } catch (err) {
      
        console.log(err)

    }

}

module.exports = Authenticate