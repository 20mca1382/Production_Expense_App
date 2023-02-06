const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const colors = require('colors')
const connectDB = require('./config/connectDB')
const path = require('path')
dotenv.config();

//database call
connectDB()
//rest object
const app = express()

//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

//routes
// app.get('/', (req,res)=>{
//     res.send('<h1>Hello from server</h1>')
// })
app.use('/api/v1/users', require('./routes/userRoute'))
//transection routes
app.use('/api/v1/transections', require("./routes/transactionRoutes"))

//static files
app.use(express.static(path.join(__dirname, './client/build')))

app.get("*", function(req,res){
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
})
//PORT
const PORT = 8080 || process.env.PORT

//Listen server
app.listen(PORT, ()=>{
    console.log(`Server running on port : ${PORT}`)
})