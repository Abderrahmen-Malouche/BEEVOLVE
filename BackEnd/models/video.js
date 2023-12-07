const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const VideoSchema = new Schema({
    link: { type: String, required: true },
    coach: { type: String, required: true },
    title: {type: String , required: true},
    game: {type:String, required:true}
});

module.exports = mongoose.model('Video', VideoSchema);