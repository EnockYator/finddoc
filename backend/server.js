// import express module
const express = require("express");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// import the mongoose module
const mongoose = require('mongoose');

//connect to mongodb using connection url stored in
//the environment variable MONGO_URL
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("MongoDB connected successfully!");
})
.catch((err) => {
    console.error("error connecting to MongoDB", err.message);
});

// start server and listen to requests
// while handling possible error
app.listen(port, (err) => {
    if (err){
        console.log("Server error", err.message);
    }
    console.log(`Server listening on port ${port}`)
    
});


// testing whether the environment variables works
console.log(process.env.MONGO_URL);


