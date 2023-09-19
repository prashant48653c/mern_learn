const dotenv = require("dotenv")
const express = require("express");
const connectDB = require("./db/conn");
const User = require("./models/userSchema");
const router = require("./router/auth");
 
 
const app = express()
dotenv.config({ path: './.env' })
const port = process.env.PORT || 3000;

app.use(router)
app.use(express.json())   //to accept json from api


const DB = process.env.DATABASE;
connectDB(DB)   //Mongo function called


 


// -----------------------ROUTING--------------------------------


app.get("/", (req, res) => {
    res.send(`Home page`)
})


app.listen(port, () => {
    console.log(`server started at port ${port}`);
})