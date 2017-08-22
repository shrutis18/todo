var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var taskSchema = new Schema ({
    label: String,
    created: Date

});
var TaskModel = mongoose.model('Task',taskSchema)
module.exports = TaskModel;