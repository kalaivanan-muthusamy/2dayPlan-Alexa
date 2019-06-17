const buildSpeechletResponse = (speechType, title, outputText, shouldEndSession, repromptText) => {
  return {
    outputSpeech: {
      type: speechType,
      text: outputText,
      ssml: outputText
    },
    card: {
        type: 'Simple',
        title: `${title}`,
        content: `${outputText}`,
    },
    reprompt: {
      outputSpeech: {
          type: 'PlainText',
          text: repromptText || '',
      },
    },
    shouldEndSession: shouldEndSession
  }
}

module.exports = buildSpeechletResponse
