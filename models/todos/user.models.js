import mongoose from "mongoose";

const userSchema = new mongoose.Schema
(
    {
        username:{
            type:String,
            requied:true,
            unique:true,
            lowercase:true
        },
        email:{
            type:String,
            requied:true,
            unique:true,
            lowercase:true
        },
        password:{
            type:String,
            requied:[true,"password is required"],
        }
    },
    {timestamps:true}
);

export const User = mongoose.model("User", userSchema)