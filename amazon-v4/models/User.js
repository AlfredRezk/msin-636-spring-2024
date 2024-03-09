const {genSalt, hash, compare} = require('bcryptjs')

const {Schema, model} = require('mongoose')
const userSchema = new Schema({

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

userSchema.pre('save', async function(next){
    const salt = await genSalt(12);
    const hashedPassword = await hash(this.password, salt)
    this.password = hashedPassword;
    next();
})

userSchema.methods.checkPassword = async function(enteredPassword){
    return compare(enteredPassword, this.password)
}

module.exports = model('User', userSchema)