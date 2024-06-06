const mongoose = require('mongoose');

const shoesSchema = mongoose.Schema({
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

const Shoes = mongoose.model('shoes', shoesSchema);

module.exports = Shoes;