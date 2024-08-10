const mongoose = require('mongoose')

const db = process.env.DATABASE

mongoose.connect(db,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>console.log('connected to mongodb'))
.catch((err)=>console.log("Failed to connect to mongodb",err))