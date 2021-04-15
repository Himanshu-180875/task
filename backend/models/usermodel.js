const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new  Schema({

    name: {
        type: String,
        required: [true, 'Please tell us your name!']
    },
    email: {
        type: String,
        required: [true, 'Please tell us your email!'],
        unique:true
    },
    password: {
        type: String,
        required: [true, 'Please tell us your password!']
    },
    register_date: {
        type:Date,
        default:Date.now
    }
});

module.exports = User =mongoose.model('user', UserSchema);
