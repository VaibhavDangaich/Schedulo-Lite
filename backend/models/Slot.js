const mongoose = require('mongoose');
const slotSchema=new mongoose.Schema({
    time:{
        type:String,
        required:true
    },
    isBooked:{
        type:Boolean,
        default:false
    },
    name:{
        type:String,
        default:""
    }
});
module.exports=mongoose.model('Slot',slotSchema);
