const mongoose = require("mongoose");

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    console.log("Using existing MongoDB connection");
    return mongoose.connection;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_DB_URL, {
      // optional, but safer
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("MongoDB connected");

    return db;
  } catch (err) {
    console.error("MongoDB connection error:", err);
    throw err; 
  }
};

module.exports = connectDB;
