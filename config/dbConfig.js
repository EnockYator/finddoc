// importing the mongoose module
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


// export mongoose module to make it available for 
// use in other files
module.exports = mongoose;






 
