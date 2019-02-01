const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ProductManager', {useNewUrlParser: true});

const DBCollectionSchema = new mongoose.Schema({
    title: {type: String, required: true, minlength:[3,"Must be 3 letters"]},
    price: {type: String, required: true},
    image: {type: String, required: true},
}, {timestamps:true});


 module.exports = mongoose.model('DBCollection', DBCollectionSchema)