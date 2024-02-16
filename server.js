// import express module
const express = require("express");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const dbConfig = require("./config/dbConfig.js");

app.listen(port, () => console.log(`Server itistening on port ${port}`));


// testing whether the environment variables works
//console.log(process.env.MONGO_URL);
