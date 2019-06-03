const launchAction = require('./actions/launchAction')
const intentAction = require('./actions/intentAction')
const buildResponse = require('./response/buildResponse')

const routes = async (event, context, callback) => {

  const res = (err, res) => {
    console.log('res', res)
    context.succeed(res)
  }

  try {

    const requestType = event.request.type;

    if(requestType === 'LaunchRequest') {
      launchAction(event.request, event.session, (sessionAttributes, speechletResponse) => {
        res(null, buildResponse(sessionAttributes, speechletResponse))
      })
    }

    else if(requestType === 'IntentRequest') {
      intentAction(event.request, event.session, (sessionAttributes, speechletResponse) => {
        res(null, buildResponse(sessionAttributes, speechletResponse))
      })
    }

  } catch (err) {
    callback(err)
  }

}

module.exports = routes
