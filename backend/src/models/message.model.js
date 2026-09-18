import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({

    senderId :{
        // not string type
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,

    },

    RecieverId :{
        // not string type
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,

    },

    text:{
        type:String
    },

    image:{
        type:String,
    },

    video:{
        type:String, 
    },

}, {timestamps:true});


const Message = mongoose.model("Message", messageSchema);

export default Message;