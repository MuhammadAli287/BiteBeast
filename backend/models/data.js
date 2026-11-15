
const mongoose= require('mongoose');
const dataschema= mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    day:{
        type:String,
        required:true
    },
    timing:{
        type:String,
        required:true
    },
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    }
},{timestamps:true})

const data =mongoose.model('data',dataschema);
module.exports=data;

