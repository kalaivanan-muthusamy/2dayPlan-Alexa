const mongoose = require('../mongoose')
const Task = require('../schema/taskSchema')

const allTask = async () => {
  const tasks = await Task.find()
  return tasks
}

module.exports = allTask
