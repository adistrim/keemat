import mongoose from "mongoose";

const connect = async () => {
    if (mongoose.connection.readyState) return;

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connection Successful");
    } catch (error) {
        throw new error("Error connecting to the database:", error);
    }
};

export default connect;