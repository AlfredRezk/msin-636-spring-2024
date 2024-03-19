const User = require('../models/User');
// const {genSalt, compare, hash} = require('bcryptjs')

exports.getLogin = (req, res)=>{
    res.render('pages/auth/login');
}

exports.getSignup = (req, res)=>{
    res.render('pages/auth/signup');
}

// Post Login 
exports.postLogin = async(req, res)=>{
    const {email, password} = req.body;
 
    const user = await User.findOne({email}) 

    if(!user) {
        req.flash('error', 'Invalid Credintials')    
        return res.redirect('/login');
    }
    // check the password
    // const match = await compare(password, user.password)
    const match = await user.checkPassword(password)
    console.log(match)
    if(!match) {
        req.flash('error', 'Invalid Credintials')
        return res.redirect('/login')
}
    // Store session info 
    req.session.isLoggedIn=true;
    req.session.user = user;
    req.flash('success', 'Logged In Successfully')
    res.redirect('/')
}

// Post signup 
exports.postSignup = async(req, res)=>{
    const {email, password, password2} = req.body;
    const userData = await User.findOne({email});
    if(userData) {
        req.flash('error', 'User account already exists')
        return res.redirect('/signup')
    }
    // Hash the password
    // const salt = await genSalt(12);
    // const hashedPassword = await hash(password, salt)
  
    // register the user
    // const user = new User({password: hashedPassword, email})
    const user = new User({password,  email})
    await user.save()
    req.flash('success', 'User account created Successfully !');
    res.redirect('/login')
}

exports.getLogout = (req, res)=>{
    // destroy the session
    req.session.destroy((err)=>{
        console.log(err);
        res.redirect('/login')
    })
}