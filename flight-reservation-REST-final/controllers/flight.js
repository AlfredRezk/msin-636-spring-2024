const Flight = require('../models/Flight');
const Reservation = require('../models/Reservation');

// URL GET + /api/flights
exports.list = async(req, res)=>{
    const data = await Flight.find({})
    res.status(200).json({
        success:true, 
        count: data.length,
        data, 
    
    })

}

// URL POST + /api/flights
exports.create = async(req, res)=>{
    const data = await Flight.create(req.body);

    res.status(201).json({
        success:true, 
        data
    })
}

// URL GET + /api/flights/:id
exports.read = async(req, res)=>{
    const data = await Flight.findById(req.params.id)
    res.status(200).json({
        success:true, 
        data
    })
}

// URL PUT + /api/flights/:id
exports.update = async(req, res)=>{
    const data = await Flight.findByIdAndUpdate(req.params.id, req.body)
    res.status(202).json({
        success:true, 
        data
    })

}

// URL DELETE + /api/flights/:id
exports.delete = async(req, res)=>{
    const data = await Flight.deleteOne({_id:req.params.id})
    res.status(data.deletedCount ? 204: 404).json({
        success: data.deletedCount? true: false, 
       
    })
}

// Get /api/flights/:id/passengers
exports.passengers = async(req, res, next)=>{
    const reservation = await Reservation.findOne({flightId: req.params.id}).populate('passengers', 'firstName lastName email')
    res.status(200).send({
        success:true, 
        count: reservation.passengers.length, 
        passengers: reservation.passengers
    })

}