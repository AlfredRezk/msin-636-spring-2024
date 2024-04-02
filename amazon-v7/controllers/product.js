const Product = require('../models/Product');

exports.getProducts = async(req, res)=>{
    const products = await Product.find();
    res.render('pages/home', {products, docTitle:'Home Page', homeActive:true})

}

exports.getProduct = async(req, res)=>{
    const id = req.params.prodId;
    const product = await Product.findById(id);
    res.render('pages/product-details', {product, docTitle:product.title})

}