const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    username:{
        type: String,
        //required: true
        required: [true, 'Please provide username'],
        unique: [true, 'Please seclect different username'], 
    }, 
    password: {
        type: String, 
        required: [true, 'Please provide username'],
        minlength: 8
    }, 
    salary: {
        type: Number, 
        min:10000
    }, 
    DOB: {
        type: Date
    },
    isAdmin: {
        type: Boolean, 
        default: false
    }
})

module.exports = model('User', userSchema)