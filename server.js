const path = require('path')
const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors')
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;
connectDB()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))



app.use(errorHandler)
app.listen(port, ()=> console.log(`server started on port ${port}`))