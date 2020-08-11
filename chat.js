const Chat = require("../schemas/chat");


let chatInsert = async (params) => {
    let query = {
        reciever_id: params.reciever_id,
        sender_id: params.sender_id,
        message: params.text,
        chatdate: params.chatdate
    }
    var addusers = new Chat(query);
    var result = await addusers.save();
    return result;
}


module.exports = {
    chatInsert
};