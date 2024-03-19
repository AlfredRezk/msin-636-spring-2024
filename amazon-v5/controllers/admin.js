const Product = require('../models/Product')
// @URL     GET /admin/add-product
// @Desc    View add form
// @access  Private
exports.getAddProduct = (req, res)=>{
    res.render('pages/add-product', {docTitle: 'Add product', addProductActive: true})
}

// @URL     POST /admin/add-product
// @Desc    Add product to database
// @access  Private
exports.postAddProduct = async(req, res)=>{

    try{
        await Product.create(req.body)

        // const product = {
        //     title: req.body.title, 
        //     image: req.body.image, 
        //     price: req.body.price, 
        //     description: req.body.description
        // }

        // const newProduct = new Product(product)
        // await newProduct.save();
        
    }catch(err){
        console.log(err);
    }
    req.flash('success', 'Product created Successfully!')
        res.redirect('/')

}

// @URL     POST /admin/add-product
// @Desc    Add product to database
// @access  Private
exports.getProducts = async(req, res)=>{
    const products = await Product.find()
    res.render('pages/admin-products', {docTitle: 'Admin Products', products, adminProductsActive:true})

}

// @URL     POST /admin/delete-product
// @Desc    Delete product from DB
// @access  Private

exports.postDeleteProduct = async(req, res)=>{
    const prodId = req.body.id;
    await Product.findByIdAndDelete(prodId)
    // await Product.deleteOne({_id:prodId});
    req.flash('success', 'Product deleted')
    res.redirect('/admin/products')
}

// @URL     GET /admin/edit-product/:prodId
// @Desc    render the edit Form
// @access  Private

exports.getEditProduct = async(req, res)=>{
    const id = req.params.prodId;
    const editMode = req.query.edit;
    if(!editMode) res.redirect('/');
    //await Product.find({_id: id})
    const product = await Product.findById(id)
    if(!product) res.redirect('/');
    res.render('pages/add-product', {editMode, product, docTitle:'Edit Product'})

}

// @URL     POST /admin/edit-product/
// @Desc    Update product
// @access  Private

exports.postEditProduct = async(req, res)=>{
    const id = req.body.id;
    // await Product.findByIdAndUpdate(id, req.body, {runValidators:true, new:true})
    const product = await Product.findById(id)
    product.title = req.body.title;
    product.image = req.body.image;
    product.price = req.body.price;
    product.description = req.body.description;
    await product.save()
    req.flash('success', 'Product Updated Successfully !')
    res.redirect('/admin/products')

}