const mongoose = require("mongoose");



const floorsSchema = new mongoose.Schema({
    floorId:Number,
    seats:Number,
    bookTimeInterval:String,
    endTimeInterval:String    
})

const userSchema = new mongoose.Schema({
    userName:String,
    floorId:Number,
    seats:Number    
})


const bookingSchema = new mongoose.Schema({
    floors: [floorsSchema],
    user:[userSchema],
    bookedSeats:{
       type: Number,        
    },
    availableSeats:{
        type: Number,
        
    },
   
})

const Booking = mongoose.model('Booking', bookingSchema)
module.exports = Booking