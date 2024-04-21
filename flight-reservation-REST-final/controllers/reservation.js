const Flight = require('../models/Flight');
const Reservation = require('../models/Reservation');
const Passenger = require('../models/Passenger')

// URL GET + /api/reservations
exports.list = async(req, res)=>{
    const data = await Reservation.find({}).populate('flightId').populate('passengers' ,'firstName lastName email')
    res.status(200).json({
        success:true, 
        count: data.length,
        data, 
    
    })

}

// URL POST + /api/reservation
exports.create = async(req, res)=>{

    const data = await Reservation.create(req.body);

    res.status(201).json({
        success:true, 
        data
    })
}

// URL GET + /api/flights/:id
exports.read = async(req, res)=>{
    const data = await Reservation.findById(req.params.id).populate('flightId').populate('passengers' ,'firstName lastName email')
    res.status(200).json({
        success:true, 
        data
    })
}

// URL PUT + /api/flights/:id
exports.update = async(req, res)=>{
    const data = await Reservation.findByIdAndUpdate(req.params.id, req.body)
    res.status(202).json({
        success:true, 
        data
    })

}

// URL DELETE + /api/flights/:id
exports.delete = async(req, res)=>{
    const data = await Reservation.deleteOne({_id:req.params.id})
    res.status(data.deletedCount ? 204: 404).json({
        success: data.deletedCount? true: false, 
       
    })
}

// Get /api/reservation/:id/passengers
exports.passengers = async(req, res, next)=>{
    const reservation = await Reservation.findOne({_id: req.params.id}).populate('passengers', 'firstName lastName email')
    console.log(reservation)


    res.status(200).send({
        success:true, 
        count: reservation.passengers.length, 
        passengers: reservation.passengers
    })
}