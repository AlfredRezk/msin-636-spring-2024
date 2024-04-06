const {Schema, model} = require('mongoose')
const taskSchema = new Schema({

    title: {
        type: String, 
        required: true
    }, 
    isCompleted: {
        type: Boolean, 
        default:false
    }, 
    priority: {
        type:String, 
        enum:['low', 'medium', 'heigh'],
        default: 'low'
    }

}, {timestamps:true})

module.exports = model('Task', taskSchema);