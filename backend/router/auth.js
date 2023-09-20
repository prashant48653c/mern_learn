const { default: mongoose } = require("mongoose");
const User = require("../models/userSchema");
const express = require("express")


const router = express.Router()
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



router.post("/register", async (req, res) => {
    try {
        const { name, email, phone, password, cpassword, work } = req.body
        if (!name || !email || !password || !cpassword || !work || !phone) {
            res.status(400).send("Please fill the form carefully")
        }
        if (password != cpassword) {
            res.status(400).send("Confirm the password carefully")
        }
        const existedEmail = await User.findOne({ email: email })
        if (existedEmail) {
            res.status(400).send("Email already registered!")
        }
        const newUser = new User({ name, email, phone, password, cpassword, work })

        const result = await newUser.save()
        res.status(201).send(result)
    } catch (error) {
        console.log(error)
        res.status(400).json( {error:"Cannot register"})
    }
})

router.post("/signin",async (req, res) => {
    try{
        const {email,password}= await req.body;
        if(!email || !password){
            res.status(400).json({error:"Fill the data properly"})
        }
        const existUser=await User.findOne({email:email, password:password})
        if(!existUser){
            res.status(404).json({ error:"Invaild Email or Password"})
        }else{
            res.status(201).json({ messege:"Succesfully logined"})

        }
    }catch(err){
        res.status(404).json( {error:"Cannot login"})
        console.log(err)
    }
 
})


module.exports = router


