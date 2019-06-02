const allTasks = require('./modules/allTasks')
const response = require('./modules/response')
const speechletResponse = require('./modules/speechletResponse')

const listController = async () => {
  const list = await allTasks
  return response(speechletResponse("Hello World", true))
}

module.exports = listController
