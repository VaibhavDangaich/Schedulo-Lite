const express = require('express');
const router = express.Router();
const Slot = require('../models/Slot');

router.get('/',async(req,res)=>{
    try{
        const slots=await Slot.find();
        res.status(200).json({
            success:true,
            data:slots,
            message:"Slots fetched successfully"
        });

    }
    catch(error){
        console.error(error);
        res.status(500).json({
            success:false,
            message:error.message
        });

    }
})
router.post('/book',async(req,res)=>{
    const {time,name}=req.body;
    try{
        const slot=await Slot.findOne({time});
        if(!slot){
            return res.status(404).json({
                success:false,
                message:"Slot not found"
            });
        }
        if(slot.isBooked){
            return res.status(400).json({
                success:false,
                message:"Slot already booked"
            });
        }
        slot.isBooked=true;
        slot.name=name;
        await slot.save();
        res.status(200).json({
            success:true,
            data:slot,
            message:"Slot booked successfully"
        });
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
})
module.exports=router;