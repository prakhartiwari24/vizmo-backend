const Booking = require('../models/bookingModel')


exports.getListOfFloors = async(req, res) => {
    const floor = await Booking.find({})
    res.status(200).json({
        status: 'success',
        data: floor
    })
    

}

// THIS CODE IS A FUNCTION WHICH WE CAN CALL ANYTIME WHENEVER WE WANT TO BOOK NEW SEATS
async function bookSeats(user,floorId,seats,startTime, endTime){
   
    const book = await Booking.create({            
        user:[{userName:user,floorId:floorId,seats:seats}],        
        bookedseats:seats,      
        floors:[
          {
            floorId:floorId,
            seats:seats,
            bookTimeInterval:startTime,
            endTimeInterval:endTime
          }
        ]
    })

   return book
}

// THIS CODE WILL BOOK THE USER SELECTED SEATS
exports.BookUserSelectedSeat = async(req, res, next) =>{
  const {user,floorId,seats,startTime, endTime} = req.body

  const data = await bookSeats(user,floorId,seats,startTime, endTime)
  res.status(200).json({
    status: 'success',
    data
  })
}

// THIS CODE WILL RETURN THE FLOORS BY FLOORSID
exports.GetSeatsByFloor = async(req,res) => {
  const {floorId} = req.params

  const data = await Booking.findOne({"floors.floorId": floorId})

  res.status(200).json({
    status: 'success',
    data
  })
  console.log(data);
}


// THIS CODE WILL CHECK IF THE USER SELECTED SEATS ARE AVAILABLE OR NOT
exports.VerifyUserSelectedSeatsAvailable = async (req, res) => {
  const {floorId,seats,startTime, endTime} =req.body

  const data = await Booking.findOne({"floors.floorId": floorId,"floors.seats":seats,
  "floors.bookTimeInterval": startTime,"floors.endTimeInterval": endTime})

  if(data){
    res.status(200).json({
      status: 'Not Found',
      message: 'Selected seats are not available',
      
    })
  } else{
      res.status(200).json({
      status: 'success',
      message: 'Selected seats are available',      
    })
  }
} 
