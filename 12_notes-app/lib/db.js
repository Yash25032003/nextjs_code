import mongoose from "mongoose";
const MONGODB_URL = process.env.MONGODB_URL;

let isConnected = false;

async function Dbconnect() {
  if (isConnected) {
    console.log(`Mongodb is already connected`);
    return;
  }
  // using try catch for error handling
  try {
    const db = await mongoose.connect(MONGODB_URL);
    isConnected = db.connections[0].readyState === 1;

    console.log(`Database connected`);
  } catch (error) {
    console.error(`Database connection error ${error}`);
  }
}

export default Dbconnect;
