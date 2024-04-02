const { validationResult } = require('express-validator');
module.exports = (req, res)=>{
   // validation
   const results = validationResult(req)

   if(!results.isEmpty()){
       const {errors} = results;
       console.log(errors)
       req.flash('error', errors[0].msg) 
      return true;

   }else{
    return false;
   }
}