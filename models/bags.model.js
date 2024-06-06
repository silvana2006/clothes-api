const mongoose = require('mongoose');

const bagsSchema = mongoose.Schema({
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

const Bags = mongoose.model('bags', bagsSchema);

module.exports = Bags;