const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const taskSchema = new  Schema({

    name: {
        type: String,
        required: [true, 'Please tell us your task!']
    },
    date: {
        type:Date,
        default:Date.now
    }
});

module.exports = Task =mongoose.model('task', taskSchema);