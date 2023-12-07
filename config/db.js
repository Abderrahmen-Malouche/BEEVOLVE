import mongoose from "mongoose";

const connectDB = async() => {
    try{
        await mongoose.connect(`mongodb://localhost:27017`)
    }catch(error){
        console.log(`Error:${error,messagee}`);
        process.exit(1);
    }
};

export default connectDB