const buildSpeechletResponse = (speechType, title, outputText, shouldEndSession, repromptText) => {
  return {
    outputSpeech: {
      type: speechType,
      text: outputText
    },
    card: {
        type: 'Simple',
        title: `SessionSpeechlet - ${title}`,
        content: `SessionSpeechlet - ${outputText}`,
    },
    reprompt: {
      outputSpeech: {
          type: 'PlainText',
          text: repromptText,
      },
    },
    shouldEndSession: shouldEndSession
  }
}

module.exports = buildSpeechletResponse
