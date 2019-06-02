const buildSpeechletResponse = require('../response/buildSpeechletResponse')

const launchAction = (request, session, callback) => {
  const speechType = 'PlainText'
  const title = 'Welcome'
  const outputText = 'Welcome to Task Manager'
  const shouldEndSession = false
  const repromptText = ''
  callback({}, buildSpeechletResponse(speechType, title, outputText, shouldEndSession, repromptText))
}

module.exports = launchAction
