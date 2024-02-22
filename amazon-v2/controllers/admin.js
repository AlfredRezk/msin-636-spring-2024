const Product = require('../models/Product')

exports.getAddProduct = (req, res)=>{
    res.render('pages/add-product', {docTitle: 'Add product'})
}
exports.postAddProduct = async(req, res)=>{

    try{
        await Product.create(req.body)
        
    }catch(err){
        console.log(err);
    }
        res.redirect('/')

}