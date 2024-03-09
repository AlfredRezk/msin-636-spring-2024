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
    if(!user) return res.redirect('/login');
    // check the password
    // const match = await compare(password, user.password)
    const match = await user.checkPassword(password)
    if(!match) return res.redirect('/login')
    res.setHeader('Set-Cookie', 'isLoggedIn=true')
    res.redirect('/')
}

// Post signup 
exports.postSignup = async(req, res)=>{
    const {email, password, password2} = req.body;
    const userData = await User.findOne({email});
    if(userData) return res.redirect('/signup');
    // Hash the password
    // const salt = await genSalt(12);
    // const hashedPassword = await hash(password, salt)
  
    // register the user
    // const user = new User({password: hashedPassword, email})
    const user = new User({password,  email})
    await user.save()
    res.redirect('/login')
}