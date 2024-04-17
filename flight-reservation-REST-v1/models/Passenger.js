const {Schema, model} = require('mongoose')

const passengerSchema = new Schema({
    firstName: { type:String, required: true, trim: true}, 
    lastName:{ type:String, required: true, trim: true}, 
    gender:{ type: String, enum:[null, 'M', 'F', 'O'] , default:null}, 
    email:{
        type:String, 
        required:[true, 'Email is required'],
        trim:true, unique: true,
        match:[/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/, 'Please provide a valid email']
    }, 
    createdId:{
        type: Schema.Types.ObjectId,
        ref:'User',
        required: true
    }
}, {timestamps: true})

module.exports  = model('Passenger', passengerSchema)