const Brendshema = require('../models/BrendShema')

class BrendController {
  async store(request, response) {

    const getBrend = await Brendshema.find()

    return response.json(getBrend)

  }
  async create(request, response) {

    const { name } = request.body;

    const getBrend = await Brendshema.create({
      name
    })

    return response.json({ status: 'ok' })
  }
  async delete(request, response) {

    const { id } = request.params;

    const getBrend = await Brendshema.findByIdAndDelete({
      _id: id
    })
    return response.json(getBrend)

  }
  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    const getBrend = await Brendshema.findByIdAndUpdate(
      id,
      {
        name: name,
      },
      { new: true }
    );
    return response.json(getBrend)

  }
}

module.exports = new BrendController();