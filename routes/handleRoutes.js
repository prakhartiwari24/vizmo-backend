const express = require('express')
const handlerController = require('../controllers/handlerController')

const router =  express.Router()

router.get('/api/v1/GetListOfFloors', handlerController.getListOfFloors)

router.post('/api/v1/BookUserSelectedSeat', handlerController.BookUserSelectedSeat)

router
.route('/api/v1/GetSeatsByFloor/:floorId')
.get(handlerController.GetSeatsByFloor)

router
.route('/api/v1/VerifyUserSelectedSeatsAvailable')
.get(handlerController.VerifyUserSelectedSeatsAvailable)



module.exports = router
