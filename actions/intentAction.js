const buildSpeechletResponse = require('../response/buildSpeechletResponse')
const allTask = require('../modules/allTask')

const intentAction = async (request, session, callback) => {
  const intentName = request.intent.name
  const speechType = 'SSML'
  const title = 'All Tasks'
  const tasks = await allTask()
  let results = '<speak>'
  tasks.map((task, index) => {
    results += `${++index}. ${task.task_details} <break time="1s"/>`
  })
  results += '</speak>'
  const outputText = results || 'No task found'
  const shouldEndSession = false
  const repromptText = ''
  callback({}, buildSpeechletResponse(speechType, title, outputText, shouldEndSession, repromptText))
}

module.exports = intentAction
