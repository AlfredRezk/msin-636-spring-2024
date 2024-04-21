const {Schema, model} = require('mongoose')
const {compare, genSalt, hash} = require('bcryptjs')

const userSchema = new Schema({
    username:{ type:String, required: true, trim:true, unique: true},
    password:{ type:String, required: true, trim:true},
    email:{
        type:String, 
        required:[true, 'Email is required'],
        trim:true, unique: true,
        match:[/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/, 'Please provide a valid email']
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    isActive:{
        type:Boolean,
        default:true
    },
    isStaff:{
        type:Boolean,
        default:false
    }
}, {timestamps:true})


userSchema.pre('save', async function(next){
    const salt = await genSalt(12);
    this.password = await hash(this.password, salt)
})

userSchema.methods.matchPassword = async function(enteredPassword){
    return compare(enteredPassword, this.password)
}
module.exports = model('User', userSchema)