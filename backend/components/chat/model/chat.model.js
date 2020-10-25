var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//name of the chat is adminId-chat-userId
var chat = new Schema({
    name: { type: String },
    admin: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    lastMessage: {
        type: Schema.Types.ObjectId,
        ref: 'Message'
    }
}, {
    versionKey: false
});

var model = mongoose.model('Chat', chat);
module.exports = model;