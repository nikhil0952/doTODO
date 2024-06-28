import mongoose from "mongoose";

const connectMongoDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL,{
            useUnifiedTopology: true,
        });
        console.log("Connected to mongoDb successfully!");
    } catch (error) {
        console.log("error", error);
        throw new Error("Error!!!!");
    }
}

export default connectMongoDb;