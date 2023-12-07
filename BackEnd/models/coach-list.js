const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const coachSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    nationality:{
        type: String,
        required: true
    },
    rating:{
        type: Number,
        required: true
    },
    strong1:{
        type: String,
        required:true
    },
    strong2:{
        type: String,
        required: true
    },
    strong3:{
        type: String,
        required: true
    },
    game:{
        type: String,
        required:true
    },
    image:{
        type: String
    },
    rank:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Coach',coachSchema);