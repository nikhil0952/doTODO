// import mongoose from "mongoose";

// const connectMongoDb = async () => {
//     try {
//         await mongoose.connect(process.env.MONGODB_URL,{
//             useUnifiedTopology: true,
//         });
//         console.log("Connected to mongoDb successfully!");
//     } catch (error) {
//         console.log("error", error);
//         throw new Error("Error!!!!");
//     }
// }

// export default connectMongoDb;

const mongoose = require('mongoose');
const uri = "mongodb+srv://nikhilwalia026:nikhil00222@cluster0.311uw99.mongodb.net/?appName=Cluster0";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
export default async function connectMongoDb() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  }catch(error){
    console.log(error);
  }
}
// run().catch(console.dir);