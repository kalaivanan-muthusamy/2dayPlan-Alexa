const buildResponse = (sessionAttributes, speechletResponse) => {
  return {
    version: "1.0",
    sessionAttributes,
    response: speechletResponse
  }
}

module.exports = buildResponse
