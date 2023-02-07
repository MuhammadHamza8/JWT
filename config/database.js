// To connect with your mongoDB database
const mongoose = require('mongoose');
// Connecting to database
mongoose.connect(
    process.env.MONGO_URI,
    {
      dbName: process.env.dbName,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) =>
      err ? console.log(err) : console.log(
        "Connected to message  database")
  );