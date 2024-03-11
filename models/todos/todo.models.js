import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({ 
    content:{
        type: String,
        requied:true
    },
    complete:{
        type:Boolean,
        default:false
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User" 
    },
    subTodos:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"SubTodo"
    }
] //array of sub - todos
}, {timestamps:true})


export const Todo = mongoose.model("Todo", todoSchema)
