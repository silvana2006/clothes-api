const mongoose = require('mongoose');

const clothesSchema = mongoose.Schema({
    brand:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    price:{
        type:Number,
        required:true
    }
});

const Clothes = mongoose.model('clothes', clothesSchema);

module.exports = Clothes;