const {Schema, model} = require('mongoose')
const userSchema = new Schema({
    name:{
        type: String, 
        required: true
    }, 
    email:{
        type: String, 
        required: true, 
        unique: true, 
        match:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    }, 
    password:{
        type: String, 
        required: true
    }
})


module.exports = model('User', userSchema)