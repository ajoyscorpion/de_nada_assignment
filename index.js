require('dotenv').config()
require('./db/connection')
const express = require('express')
const cors = require('cors')
const router = require('./routes/router')

const server = express()

server.use(cors())
server.use(express.json())
server.use(router)

const PORT = process.env.PORT || 3000

server.listen(PORT,()=>{
    console.log(`Port Started at : ${PORT}`);
})

server.get('/',(req,res)=>{
    res.status(200).json('Port Started')
})
