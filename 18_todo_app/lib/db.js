//! This file creates a safe, reusable MongoDB connection using Mongoose,This file creates a safe, reusable MongoDB connection using Mongoose,

import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

// Global memory me pehle se connection hai ya nahi, wo check karta hai
// Why global because next js multiple time reload karta hai files ko
let cached = global.mongoose;

// Agar cache nahi hai: ek naya object bana do , connection aur promise store karo

if (!cached) {
  cached = global.mongoose = { connection: null, promise: null };
}
async function connectDb() {
  if (cached.connection) {
    // Agar pehle se connection bana hua hai → wahi use karo
    return cached.connection;
  }

  // Agar connection start nahi hua:
  // MongoDB connect karo
  // Promise ko cache me store karo
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      return mongoose;
    });
  }
  try {
    // Connection successful → cache me save
    cached.connection = await cached.promise;
  } catch (error) {
    // Error aaya → promise reset + error throw
    cached.promise = null;
    throw error;
  }
  // Returns the active MongoDB connection.
  return cached.connection;
}

export default connectDb;
