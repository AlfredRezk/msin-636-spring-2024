const {Schema, model} = require('mongoose')
const productSchema = new Schema({
    userId:{
        type: Schema.ObjectId,
        ref:'User',
        required:true
    },

    title:{
        type: String, 
        required:[true, 'Title is requird'],
        minLength: [5, 'Title is 5 Characters min'], 
        maxLength: [20, 'Title is 20 Characters max']
    }, 
    price:{
        type: Number, 
        required: true
    },
    description:{
        type: String, 
        required: true
    }, 
    image:{
        type:String, 
        required: true, 
        // match:/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g
    }
})


// userSchema.path('image').validate = function(){
//    if(this.image.startswith('http')) 
//     return true 
//     else 
//     return false
// }

module.exports = model('Product', productSchema)