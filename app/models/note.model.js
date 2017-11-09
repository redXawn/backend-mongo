var mongoose = require('mongoose');

var NoteSchema = mongoose.Schema({
    email: String,
    username: String,
    name: String,
    question: String,
    answer: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);