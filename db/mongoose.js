const mongoose = require("mongoose");

const dbconnecturl = process.env.NOTER_MONGODB_URL;

// mongoose.connect(dbconnecturl, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });


mongoose 
 .connect(dbconnecturl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
          })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));