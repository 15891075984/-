const mongoose =require('mongoose')
const Schema=mongoose.Schema;
const Regions=new Schema({
    name:{
        type:String,
    },
    id:{
        type:String
    },
    city:{
        type:String
    },
    code:{
        type:String
    },
    description:{
        type:String
    }
})
module.exports=mongoose.model('Regions',Regions)