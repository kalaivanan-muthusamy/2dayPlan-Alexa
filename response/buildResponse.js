const buildResponse = (sessionAttributes, speechletResponse) => {
  const response =  {
    version: "1.0",
    sessionAttributes,
    response: speechletResponse
  }
  return response
}

module.exports = buildResponse
