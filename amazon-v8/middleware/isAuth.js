exports.isAuth = (req, res, next)=>{
    if(!req.session.isLoggedIn) return res.redirect('/login')
    next();
}

// Grant access to specific roles
exports.authorize= (...roles)=>(req, res, next)=>{
    if(!roles.includes(req.session?.user?.role))
        res.redirect('/')
    else 
    next();

}