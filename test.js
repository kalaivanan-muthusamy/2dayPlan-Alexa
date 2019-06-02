
const launchAction = require('./actions/launchAction')
const buildResponse = require('./response/buildResponse')

const routes = async (callback) => {
  launchAction(null, null, (sessionAttributes, speechletResponse) => {
    callback(null, buildResponse(sessionAttributes, speechletResponse))
  })
}

routes((error, res)=>{
  console.log(res);
});
