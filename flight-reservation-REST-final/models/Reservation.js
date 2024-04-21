const {Schema, model} = require('mongoose')

const reservationSchema = new Schema({
 flightId:{
    type: Schema.Types.ObjectId,
    ref:'Flight',
    required:true
 }, 
 passengers:[{
    type: Schema.Types.ObjectId,
    ref:'Passenger',
    required:true
 }],
 createdId: {
    type: Schema.Types.ObjectId,
    ref:'User',
    required:true
 }

}, {timestamps: true})

module.exports  = model('Reservation', reservationSchema)