const {connect} = require('mongoose')


async function connectDB(){
    try{
        const conn = await connect(process.env.MONGO_URL)
        console.log(`Connect to DB : ${conn.connection.host}`.yellow)
    
    }catch(err){
        console.log(`${err.message}`.red)
    }

}


module.exports  = connectDB