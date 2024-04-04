//CONNECTING TO OUR DATABASE
import mongoose from "mongoose";

let isConnected = false; 

export const dbConnect = async () =>{
  mongoose.set('strictQuery', true);

  if(!process.env.MONGODB_URI) {
    return (console.log("MONGODB_URI is not defined"));
  }
  if(isConnected) {
    return console.log("Already connected to database");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;
  } catch (error) {
    console.log("Error connecting to database: ", error);
  }
}