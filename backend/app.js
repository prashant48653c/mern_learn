const dotenv = require("dotenv")
const express = require("express");
const connectDB = require("./db/conn");


const app = express()
dotenv.config({ path: './.env' })
const port = process.env.PORT || 3000;

app.use(express.json())   //to accept json from api


const DB=process.env.DATABASE;
connectDB(DB)   //Mongo function called


// --------------------MIDDLEWARE-----------------------------------


const middleware = (req, res, next) => {
    console.log("Middleware has happened")
    next()
}

// -----------------------ROUTING--------------------------------


app.get("/", (req, res) => {
    res.send(`Home page`)
})

app.get("/about", middleware, (req, res) => {
    res.send(`about page`)
})

app.get("/contact", (req, res) => {
    res.send(`contact page`)
})

app.get("/signin", (req, res) => {
    res.send(`signin page`)
})

app.get("/signup", (req, res) => {
    res.send(`signup page`)
})

app.listen(port, () => {
    console.log(`server started at port ${port}`);
})