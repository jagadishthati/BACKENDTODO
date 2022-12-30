require("dotenv").config()
const express = require("express");
const connectTODB =require("./config/database")
const userRoutes = require("./routes/userroutes")
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended:true}))
connectTODB();
app.use("/",userRoutes); 
module.exports =app;