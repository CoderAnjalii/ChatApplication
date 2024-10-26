import mongoose from "mongoose";

const dbConnect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_CONNECTION_STRING),
        console.log("DB connected Succesfully");
    } catch (error) {
        console.log(console.error);
    }
}
 

export default dbConnect