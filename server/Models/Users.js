const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        index: { unique: true }
    },
    firstName: {
        type: String,
        required: true
    },
    middleName: String,
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    loginType: {
        type: Number,
        required: true
    }, //for distinguishing teacher and student
    userCode: {
        type: String,
        required: true,
        index: { unique: true }
    }, // Teacher-> TeacherCode || Student-> RollNo
    password: {
        type: String,
        required: true
    },

});

module.exports = mongoose.model("users", userSchema);
