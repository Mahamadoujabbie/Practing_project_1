//setting up express and serverless-http
const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const app = express();

//Middleware
app.use(express.json());
app.use(cors());

//routes
app.get('/', (reg, res)=>{
    res.json({
        message:"hello my developers"
    })
});

app.get('/user', (reg, res)=>{
    res.status(200).json([{user: "morri"},{user:"lamin"}])
});

//exporting express
module.exports.handler = serverless(app);