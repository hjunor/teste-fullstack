const Brendshema = require('../models/BrendShema')

class BrendController {
  store(request, response) {

    return response.json({ status: 'ok' })

  }
  create(request, response) {
    return response.json({ status: 'ok' })
  }
  delete(request, response) {

    return response.json({ status: 'ok' })

  }
  update(request, response) {
    return response.json({ status: 'ok' })

  }
}

module.exports = new BrendController();