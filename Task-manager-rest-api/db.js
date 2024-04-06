const {connect} = require('mongoose');

const connectDB = async()=>{
    try{
        await connect(process.env.MONGO_URI)
        console.log('Connected to DB'.yellow)
    }catch(error){
        console.log(`Error: could not connect to DB \n ${error.message}`.red)
    }
}

module.exports = connectDB