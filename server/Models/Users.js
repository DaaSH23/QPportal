const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    firstName: String,
    lastName: String,
    phoneNumber: String,
    country: String,
    facultyType: String,
    facultyCode: String,
    password:String
});

module.exports = mongoose.model("users", userSchema);