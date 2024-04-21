const {Schema, model} = require('mongoose')

const flightSchema = new Schema({
    flightNumber: { type:String, required: true, trim: true, unique: true}, 
    airline:{ type:String, required: true, trim: true}, 
    departure:{ type:String, required: true, trim: true}, 
    departureDate: {type:Date, required:true},
    arrival:{ type:String, required: true, trim: true}, 
    arrivalDate: {type:Date, required:true},
    departureDateStr: String, 
    arrivalDateStr: String, 
    createdId:{
        type: Schema.Types.ObjectId,
        ref:'User',
        required: true
    }

}, {timestamps: true})


module.exports  = model('Flight', flightSchema)