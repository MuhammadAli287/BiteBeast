

const dns = require("dns");
dns.setServers(["8.8.8.8","1.1.1.1"]);

const express = require ('express')
const cors = require ('cors')
const mongoose = require ('mongoose');
const data = require("../models/data");
const router = require("./menu");
const app = express()
app.use(cors());
app.use(express.json());

require ('dotenv').config();

const menuroutes = require ('./routes/menu')
app.use('/api/menu', menuroutes);

app.listen(5000,()=>{
console.log("express is running on 5000 port")
})