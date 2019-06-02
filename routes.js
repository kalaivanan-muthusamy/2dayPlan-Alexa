const response = require('./modules/response')
const speechletResponse = require('./modules/speechletResponse')

const routes = (event, context, callback) => {
  switch (event.request.type) {

    case "LaunchRequest":
      context.succeed(
        response(speechletResponse("Welcome to Task Manager", false))
      )
      break;

    case "IntentRequest":
      switch (event.request.intent.name) {
        case "Greet":
          context.succeed(
            response(speechletResponse("Hello World", true))
          )
          break;
      }
    break;
  }
}

module.exports = routes
