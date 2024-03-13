import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema = new Schema(
    {
        email:{
            type: String,
            required: true,
            unique: true,
        },
        passwords:{
            type: String,
            required: true,
        },
        },
        {timestamps:true}
);

export default mongoose.modeles.User || mongoose.modeles("User", userSchema); // if not created, create a new user