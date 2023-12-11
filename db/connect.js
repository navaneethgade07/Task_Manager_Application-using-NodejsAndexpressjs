const mongoose = require('mongoose');

// connecting our application to the database
// hiding the connectionstring as url params using dotenv package while pushing to github
const connectDB = (url)=>{
  return mongoose.connect(url);
}

module.exports = connectDB;




// mongoose.connect(connectionString).then(()=>{
//     console.log('successfully connected');
// }).catch((err)=>{
//     console.log(err);
// })

