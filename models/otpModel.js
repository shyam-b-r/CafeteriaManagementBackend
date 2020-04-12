const mongoose = require('mongoose');

const otpSchema = mongoose.Schema({
    phoneNo : String,
    otp : String,
    userName: String
}, 
{ timestamps: true })

module.exports = mongoose.model('Otp', otpSchema);