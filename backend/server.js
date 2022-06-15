// server.js
const express = require('express');
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const cors = require('cors')

const app = express();

connectDB()

app.use(cors())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(express.json()) //to use req.body
app.use(express.urlencoded({ extended: false }))

app.use('/users', require('./routes/userRoutes/userRoutes'))
app.use('/rooms', require('./routes/roomRoutes/roomRoutes'))
app.use('/bookRoom', require('./routes/bookingRoutes/bookingRoutes'))

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));