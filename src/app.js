const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("../src/db/connection");

const app = express();


const port = process.env.PORT || 5000;


//Routes

const userRoutes = require('../src/routers/user');

//Middelwares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

if(req.method === "OPTIONS"){
    res.header("Access-Control-Allow-Methods", "POST, PUT, PATCH, DELETE, GET");
    return res.status(200).json({});
}
next();
});


//Routes which handel requests
app.use("/user", userRoutes);

//Error Handeling
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});


app.listen(port, () => {
    console.log(`connection established on port ${port}`);
});