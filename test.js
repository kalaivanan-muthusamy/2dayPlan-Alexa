const listController = require('./controllers/listController')
const response = require('./modules/response')
const speechletResponse = require('./modules/speechletResponse')
const allTask = require('./modules/allTask')
const routes = async () => {
  const tasks = await allTask()
  console.log(response(speechletResponse("Welcome to Task Manager", false, tasks)))
}

routes();
