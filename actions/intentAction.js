const buildSpeechletResponse = require('../response/buildSpeechletResponse')
const allTask = require('../modules/allTask')

const intentAction = async (request, session, callback) => {
  const indentName = request.intent.name
  const speechType = 'PlainText'
  const title = 'All Tasks'
  const tasks = await allTask()
  let results = ''
  tasks.map((task, index) => {
    results += `${++index}. ${task.task_details} \n`
  })
  const outputText = results || 'No task found'
  const shouldEndSession = false
  const repromptText = ''
  callback({}, buildSpeechletResponse(speechType, title, outputText, shouldEndSession, repromptText))
}

module.exports = intentAction
