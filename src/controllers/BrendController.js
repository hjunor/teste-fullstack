const Brendshema = require('../models/BrendShema');

class BrendController {
  async store(request, response) {
    const { id } = request.params;
    const getBrend = await Brendshema.findById({
      _id: id,
    });

    return response.json({
      id: getBrend._id,
      name: getBrend.name,
    });
  }
  async create(request, response) {
    const { name } = request.body;

    const getBrend = await Brendshema.create({
      name,
    });

    return response.json({
      id: getBrend._id,
      name: getBrend.name,
    });
  }
  async delete(request, response) {
    const { id } = request.params;

    const getBrend = await Brendshema.findByIdAndDelete({
      _id: id,
    });

    return response.json({
      id: getBrend._id,
      name: getBrend.name,
    });
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

    return response.json({
      id: getBrend._id,
      name: getBrend.name,
    });
  }
}

module.exports = new BrendController();
