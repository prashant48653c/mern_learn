const dotenv = require("dotenv")
const express = require("express");
const connectDB = require("./db/conn");
const User = require("./models/userSchema");
const router = require("./router/auth");
const cors=require("cors")
const cookieParser = require("cookie-parser")
 
 
const app = express()
app.use(cookieParser());


dotenv.config({ path: './.env' })
const port = process.env.PORT || 3000;
app.use(cors({
origin:"http://localhost:5173",
methods:"GET,HEAD,PUT,PATCH,POST,DELETE",
credentials:true
}));

app.use(express.json()) 
  //to accept json from api
app.use(router)


const DB = process.env.DATABASE;
connectDB(DB)   //Mongo function called




// -----------------------ROUTING--------------------------------


app.get("/",async (req, res) => {
    res.send(`Home page`)


})


app.listen(port, () => {
    console.log(`server started at port ${port}`);
})