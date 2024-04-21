const User = require("../models/User");
const { verify } = require("../utils/generateToken");
const ErrorResponse = require('../utils/ErrorResponse')


// Authentication
exports.auth = async (req, res, next) => {
  const auth = req.headers?.authorization || null;
  const accessToken = auth ? auth.split(" ")[1] : null; // Bearer asdasdasdadasdasdasdasd
  const userData = await verify(accessToken);
  const user = await User.findById(userData.userId);
  //   attach the user infomation to req
  req.user = user;
  //    Add createdId for all req.body
  req.body.createdId = req.user?._id;
  next();
};



// Authorization
exports.isLogin= (req, res, next)=>{
    if(req.user) next()
    throw new ErrorResponse(403, 'Login First !')

}

exports.isAdmin = (req, res, next)=>{

    if(req.user.isAdmin) return next();
    throw new ErrorResponse(403, 'You must login as Admin!')

}
exports.isStaffOrAdmin = (req, res, next)=>{
    if(req.user.isAdmin || req.user.isStaff) return next();
    throw new ErrorResponse(403, 'You must login as a Staff or Admin!')

}