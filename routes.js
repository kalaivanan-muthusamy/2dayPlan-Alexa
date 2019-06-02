const listController = require('./controllers/listController')
const response = require('./modules/response')
const speechletResponse = require('./modules/speechletResponse')
const allTask = require('./modules/allTask')
const routes = async (event, context, callback) => {
  switch (event.request.type) {

    case "LaunchRequest":
      const tasks = await allTask()
      context.succeed(
        response(speechletResponse("Welcome to Task Manager", true, tasks))
      )
      break;

    case "IntentRequest":
      switch (event.request.intent.name) {
        case "List":
          // context.succeed(await listController())
          break;
      }
    break;
  }
}

module.exports = routes
