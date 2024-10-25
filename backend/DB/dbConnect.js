import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const dbConnect = async()=>{
   
    try {
        const conn = await mongoose.connect(process.env.MONGO_CONNECTION_STRING,{
        });
        console.log(`DB connected Succesfully `);
    } catch (error) {
        console.log(`error.${error.message}`);       
         process.exit();
    }
};

export default dbConnect;