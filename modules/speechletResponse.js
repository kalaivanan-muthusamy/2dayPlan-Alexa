const speechletResponse = (outputText, shouldEndSession) => {
  return {
    outputSpeech: {
      type: "PlainText",
      text: outputText
    },
    debug: 'hello',
    shouldEndSession: shouldEndSession
  }
}

module.exports = speechletResponse
