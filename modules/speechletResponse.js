const speechletResponse = (outputText, shouldEndSession, debug = null) => {
  return {
    outputSpeech: {
      type: "PlainText",
      text: outputText
    },
    shouldEndSession: shouldEndSession,
    debug: debug
  }
}

module.exports = speechletResponse
