const Product = require("../models/Product");
const User = require("../models/User");
exports.postAddCart = async (req, res, next) => {
  const { id } = req.body;
  const user = await User.findOne({ _id: req.session.user._id.toString() });
  const product = await Product.findOne({ _id: id });
  user.addToCart(product);
  await user.save();
  req.session.user = user;

  req.flash("success", "Added to Cart !");
  res.redirect("/");
};

exports.getCart = async (req, res, next) => {
  const user = await User.findOne({
    _id: req.session.user._id.toString(),
  }).populate("cart.products.productId");

  res.render("pages/cart", { docTitle: "Cart", cart: user.cart });
};

exports.decCart = async (req, res, next) => {
  const { prodId } = req.params;
  const user = await User.findOne({
    _id: req.session.user._id.toString(),
  }).populate("cart.products.productId");

  user.cart.totalQty -= 1;
  const index = user.cart.products.findIndex(
    (item) => item.productId._id.toString() === prodId,
  );
  if (user.cart.products[index].qty > 1) {
    user.cart.products[index].qty = user.cart.products[index].qty - 1;
    user.cart.products[index].total -=
      user.cart.products[index].productId.price;
    user.cart.totalPrice -= user.cart.products[index].productId.price;
    await user.save();
    req.session.user = user;
    req.flash("success", "Removed product from Cart!");
    res.redirect("/cart");
  } else if (user.cart.products[index].qty === 1) {
    user.cart.totalPrice -= user.cart.products[index].productId.price;
    user.cart.products = user.cart.products.filter((p) => p.productId._id != prodId);
    await user.save();
    req.session.user = user;
    req.flash("success", "Removed product from Cart!");
    res.redirect("/cart");
  }
};

exports.incCart = async (req, res, next) => {
  const { prodId } = req.params;
  const user = await User.findOne({
    _id: req.session.user._id.toString(),
  }).populate("cart.products.productId");

  user.cart.totalQty += 1;
  const index = user.cart.products.findIndex(
    (item) => item.productId._id.toString() === prodId,
  );

  user.cart.products[index].qty = user.cart.products[index].qty + 1;
  user.cart.products[index].total += user.cart.products[index].productId.price;
  user.cart.totalPrice += user.cart.products[index].productId.price;
  await user.save();
  req.session.user = user;
  req.flash("success", "Added product from Cart!");
  res.redirect("/cart");
};

exports.removeCart = async(req, res, next)=>{
    const { prodId } = req.body;

    const user = await User.findOne({
        _id: req.session.user._id.toString(),
      }).populate("cart.products.productId");

      const index = user.cart.products.findIndex(
        (item) => item.productId._id.toString() === prodId,
      );
     
      
      user.cart.totalQty -= user.cart.products[index].qty;
      user.cart.totalPrice -= user.cart.products[index].qty  * user.cart.products[index].productId.price;
  
      const products = user.cart.products.filter((p) => p.productId._id != prodId);
      user.cart.products = products;
      await user.save();
      req.session.user = user;
      req.flash("success", "Removed product from Cart!");
      res.redirect("/cart");
    
    
}
