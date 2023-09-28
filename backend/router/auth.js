const { default: mongoose } = require("mongoose");
const User = require("../models/userSchema");
const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser")
const Authenticate = require("../middleware/authenticate");


const router = express.Router();
router.use(cookieParser());
router.use(express.json())



router.get("/getdata",Authenticate, async (req, res) => {
    const data = await (req.rootUser)
    if (!data) {
        res.status(400).json({ error: "not" })
    }else{
        res.status(200).send(data)

    }
})



router.post("/contact",Authenticate, async (req, res) => {
    // console.log( req.cookies ,"tokensss")
    try {
        
        const { name, email, feedback, phone, location } = await req.body;
        if (!name || !email || !feedback || !phone || !location) {
            res.status(404).json({ error: "fill the form carefully" })
        }
        const userid = await req.userID
        console.log(userid)

        const userContact = await User.findOne({ _id: userid })

        if (userContact) {
            const messege = await userContact.takeMessege(name, email, phone, feedback, location);

            await userContact.save()

            res.status(201).json({ messege: "data added" })
        } else {
            res.status(400).json({ messege: "Not done" })
        }

    } catch (err) {
        res.status(400).send("Cannot send the messege")
    }
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




router.post("/signin",  async (req, res) => {
    try {
        const { email, password } =  req.body;
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
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true,
                credentials: "include"
            })

            res.status(201).json({ messege: "Succesfully logined" })
            // console.log(req.cookies.jwtoken)
        }
    } catch (err) {
        res.status(404).json({ error: "Cannot login" })
        console.log(err)
    }
})



router.get("/about", Authenticate, (req, res) => {
    res.status(200).send(req.rootUser)


})

router.get("/logout",async (req, res) => {
    res.clearCookie('jwtoken');
    console.log("cookie clear")
    res.status(200).json({messege:"User has been logged out"})


})


module.exports = router


