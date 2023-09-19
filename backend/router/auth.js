const User = require("../models/userSchema");
const express=require("express")


const router=express.Router()
const middleware = (req, res, next) => {
    console.log("Middleware has happened")
    next()
}

router.get("/about", middleware, (req, res) => {
    res.send(`about page `)
})

router.get("/contact", (req, res) => {
    res.send(`contact page`)
})

router.get("/signin", (req, res) => {
    res.send(`signin page`)
})

router.post("/register", (req, res) => {
    
    console.log(req.body)
})


module.exports=router


 