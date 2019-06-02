const launchAction = require('./actions/launchAction')
const indentAction = require('./actions/indentAction')
const buildResponse = require('./response/buildResponse')

const routes = async (event, context, callback) => {

  try {

    const requestType = event.request.type;

    if(requestType === 'LaunchRequest') {
        launchAction(event.request, event.session, (sessionAttributes, speechletResponse) => {
          callback(null, buildResponse(sessionAttributes, speechletResponse))
        })
    }

    else if(requestType === 'IntentRequest') {
      indentAction(event.request, event.session, (sessionAttributes, speechletResponse) => {
        callback(null, buildResponse(sessionAttributes, speechletResponse))
      })
    }

  } catch (err) {
    callback(err)
  }

}

module.exports = routes
