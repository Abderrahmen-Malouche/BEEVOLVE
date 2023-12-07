const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const testimonialsSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    rating:{
        type: Number,
        required: true
    },
    game:{
        type: String,
        required: true
    },
    opinion:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Testiomonial',testimonialsSchema);
