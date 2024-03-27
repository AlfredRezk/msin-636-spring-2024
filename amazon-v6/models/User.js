const { genSalt, hash, compare } = require("bcryptjs");
const crypto = require('crypto');

const { Schema, model } = require("mongoose");
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
  },
  password: {
    type: String,
    required: true,
  },
  cart: {
    products: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          required: true,
          ref:'Product'

        },
        qty: { type: Number },
        total:{type: Number}
      },
    ],
    totalPrice: {
        type: Number, 
        default:0
    }, 
    totalQty:{
      type: Number, 
      default:0
    }
  },
  resetPasswordToken:String, 
  resetPasswordExpire: Date,
  role:{
    type: String, 
    enum:['user', 'admin'],
    default:'user'
  }
});


// addToCart Method 
userSchema.methods.addToCart = function(product){
    // Check if the product already in the cart or not 
    let index = this.cart.products.findIndex(p=> p.productId.toString() === product._id.toString())

    let newQty = 1;
    let totalPrice = 0;
    const updatedCartProducts = [...this.cart.products]
    // Product already exists in DB
    if(index>=0){
        newQty = this.cart.products[index].qty+1;
        updatedCartProducts[index].qty = newQty;
        updatedCartProducts[index].total =  updatedCartProducts[index].qty*product.price;
        // Update total price 
    }else{
        updatedCartProducts.push({productId: product._id, qty:newQty, total: newQty*product.price})
        // update the total price
    }

    totalPrice =this.cart.totalPrice+product.price
    let totalQty = updatedCartProducts.reduce((acc, p)=> acc+p.qty, 0)
    // update the cart 
    this.cart = {
        products: updatedCartProducts, 
        totalPrice, 
        totalQty
    }

    
}

userSchema.pre("save", async function (next) {
  
  if(!this.isModified('password')) next();
    const salt = await genSalt(12);
    const hashedPassword = await hash(this.password, salt);
    this.password = hashedPassword;  

});

userSchema.methods.checkPassword = async function (enteredPassword) {
  return compare(enteredPassword, this.password);
};

userSchema.methods.getResetPasswordToken = function(){
  // Generate Token 
  const resetToken = crypto.randomBytes(20).toString('hex');

  // Hash the token and set it to the resePasswordToken field 
  this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex')
  // Set the expire to 10 min;
  this.resetPasswordExpire = Date.now()+10*60*1000;
  return resetToken

}

module.exports = model("User", userSchema);
