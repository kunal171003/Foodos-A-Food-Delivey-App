import mongoose from "mongoose";

export const connectDB = async () => {
    const uri = process.env.MONGO_URI;
    if (!uri) {
        throw new Error("Missing MONGO_URI environment variable");
    }
    await mongoose.connect(uri).then(() => console.log("DB Connected"));

}