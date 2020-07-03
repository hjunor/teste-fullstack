const CategoryShema = require('../models/CategoryShema');
class CategoryController {
  async create(requeste, response) {
    const { title, description } = requeste.body;

    const category = await CategoryShema.create({
      _id: uuid.v4(),
      title,
      description,
    });

    return response.json(category);
  }
  // async store(response, requeste) {
  //   response.json({ massege: 'ok' });
  // }
  // async update(response, requeste) {
  //   response.json({ massege: 'ok' });
  // }
  // async delete(response, requeste) {
  //   response.json({ massege: 'ok' });
  // }
}

module.exports = new CategoryController();
