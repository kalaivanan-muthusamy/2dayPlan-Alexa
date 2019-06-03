const routes = require('./routes')

const res = async () => {
    const request = {
      request: {
        type: 'IntentRequest',
        intent: {
          name: 'Task'
        }
      },
      session: null
    }
    const result = await routes(request, null, (err, res) => {

    })
}

res()
