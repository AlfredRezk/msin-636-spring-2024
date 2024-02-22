const {connect} = require('mongoose')

const url = 'mongodb+srv://alfred:password00@db.uyqbjts.mongodb.net/amazon';
const User = require('./models/User')

async function connectDB(){
    try{

        await connect(url)
        console.log('Connected to DB')
        await User.create({username: 'JohnDoe', password:'12345678', salary:20000 })

    }catch(err){
        throw err;
    }

}


connectDB()

