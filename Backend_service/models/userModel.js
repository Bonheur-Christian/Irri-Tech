const mongoose = require('mongoose')

const farmerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 }
})


const Farmer = mongoose.model('Farmer', farmerSchema);

module.exports = Farmer;