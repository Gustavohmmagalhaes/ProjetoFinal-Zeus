require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const AuthRouter = require('./Routes/AuthRouter')
require('./Models/db')

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json())
app.use(cors())
app.use('/auth', AuthRouter)
app.listen(PORT,() => {
    console.log(`Server is running on ${PORT}`)
    
})