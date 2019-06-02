const mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

const taskSchema = new mongoose.Schema({
  _id: ObjectId,
  user_id: ObjectId,
  task_details: String,
  status: Number,
  created_at: Date,
  updated_at: Date
});

const Task = mongoose.model('tasks', taskSchema)
module.exports = Task
