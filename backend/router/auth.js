const { default: mongoose } = require("mongoose");
const User = require("../models/userSchema");
const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")



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
            res.status(400).json("Please fill the form carefully")
        }
        if (password != cpassword) {
            res.status(400).json("Confirm the password carefully")
        }
        const existedEmail = await User.findOne({ email: email })

        if (existedEmail) {

            res.status(400).json("Email already registered!")
        }




        const newUser = new User({ name, email, phone, password, cpassword, work })
        await newUser.save()
        res.status(201).json({ messege: "Succesfully registered" })



    } catch (error) {
        console.log(error)
        res.status(400).json({ error: "Cannot register" })
    }
})




router.post("/signin", async (req, res) => {
    try {
        const { email, password } = await req.body;
        if (!email || !password) {
            res.status(400).json({ error: "Fill the data properly" })
        }
        const existUser = await User.findOne({ email: email })
        const isMatch = await bcrypt.compare(password, existUser.password)

        if (!existUser) {
            res.status(404).json({ error: "Invaild Email " })
        }
        if (!isMatch) {
            res.status(404).json({ error: "Invaild  Password" })

        } else {
            const token = await existUser.generateAuthToken()
            console.log(token)
            res.cookie("jwt", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            })

            res.status(201).json({ messege: "Succesfully logined" })

        }
    } catch (err) {
        res.status(404).json({ error: "Cannot login" })
        console.log(err)
    }

})


module.exports = router


