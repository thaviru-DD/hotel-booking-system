const mongoose = require('mongoose'); // import the mongoose library to interact with MongoDB

const connectDB = async () => { // connectDB is an asynchronous function that will establish a connection to the MongoDB database
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI); // here we use mongoose's connect method to connect to the database using the connection string stored in the MONGO_URI environment variable. MONGO_URL is place in side the .env file 
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB; // his allows other files (like server.js) to use this function.