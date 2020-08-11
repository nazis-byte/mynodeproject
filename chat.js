const mongoose = require("mongoose");
const { Schema } = mongoose;
const ChatSchema = new Schema({
    reciever_id: String,
    sender_id: String,
    message: String,
    chatdate: String
})
module.exports = mongoose.model('Chat', ChatSchema);