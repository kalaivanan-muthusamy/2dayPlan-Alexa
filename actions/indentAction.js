const buildSpeechletResponse = require('../response/buildSpeechletResponse')

const indentAction = (request, session, callback) => {
  const indentName = request.intent.name
  const speechType = 'PlainText'
  const title = 'All Tasks'
  const outputText = 'Glad to help you'
  const shouldEndSession = false
  const repromptText = ''
  callback({}, buildSpeechletResponse(speechType, title, outputText, shouldEndSession, repromptText))
}

module.exports = indentAction
