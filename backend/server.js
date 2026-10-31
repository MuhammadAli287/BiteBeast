
const express = require ("express")
const cors = require ("cors")
const app =express();
app.use(cors());

const menuroutes = require ('./routes/menu')
app.use('/api/menu', menuroutes);

app.listen(5000,()=>{
console.log("express is running on 5000 port")
})