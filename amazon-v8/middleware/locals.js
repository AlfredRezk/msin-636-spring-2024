module.exports = (req, res, next)=>{
        res.locals.isAuthenticated = req.session.isLoggedIn;
        res.locals.errorMessage = req.flash('error');
        res.locals.successMessage = req.flash('success');
        res.locals.cartQty = req.session?.user?.cart?.totalQty; 
        res.locals.admin = req.session?.user?.role ==='admin'
        next();
    }
