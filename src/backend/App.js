require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./Router");
const cors = require("cors")
const port = 8004;
const hostname='localhost';

// middle ware
app.use(express.json());
app.use(cors());
app.use(router)


app.listen(port,hostname, ()=>{
    console.log(`server start at port no :${port}`)
})