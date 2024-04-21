const jwt = require('jsonwebtoken');

exports.generate = function(userData){
        return jwt.sign(userData, process.env.JWT_SECRET,{expiresIn:'30m'}) 
}

exports.verify = function(token){
    return new Promise((resolve, reject)=>{
        jwt.verify(token, process.env.JWT_SECRET, function(err, data){
          if(err) reject(err)
          resolve(data)  
        })
    })
}