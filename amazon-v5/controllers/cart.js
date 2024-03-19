const Product = require('../models/Product');
const User = require('../models/User');
exports.postAddCart = async (req, res, next)=>{
    const {id} = req.body;
    const user = await User.findOne({_id: req.session.user._id.toString()})
    const product = await Product.findOne({_id: id})
    user.addToCart(product);
    await user.save()
    req.flash('success', 'Added to Cart !');
    res.redirect('/');
}

exports.getCart = async(req, res, next)=>{
    const user = await User.findOne({_id: req.session.user._id.toString()}).populate('cart.products.productId')

    res.render('pages/cart', {docTitle:'Cart', cart: user.cart})
}