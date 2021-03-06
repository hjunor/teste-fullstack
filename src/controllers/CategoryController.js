const CategoryShema = require('../models/CategoryShema');
class CategoryController {

  async create(requeste, response) {
    const { title, description } = requeste.body;

    const getCategory = await CategoryShema.create({
      _id: uuid.v4(),
      title,
      description,
    });

    return response.json(getCategory);
  }

  async store(requeste, response) {
    const { id } = requeste.params;
    const getCategory = await CategoryShema.findById(id);

    response.json(getCategory);
  }

  async storeAll(requeste, response) {
    const getCategory = await CategoryShema.find();

    const category = getCategory.map((category) => {
      return {
        id: category._id,
        title: category.title,
        description: category.description,
      };
    });

    response.json(category);
  }

  async updateDesc(requeste, response) {
    const { id } = requeste.params;

    const { description } = requeste.body;

    const getDescription = await CategoryShema.findByIdAndUpdate(
      id,
      {
        description: description,
      },
      { new: true }
    );

    return response.json(getDescription);
  }
  async updateTitle(requeste, response) {
    const { id } = requeste.params;

    const { title } = requeste.body;

    const getCategory = await CategoryShema.findByIdAndUpdate(
      id,
      {
        title: title,
      },
      { new: true }
    );

    if (!getCategory) {
      return response.sendStatus(401).json({
        massege: 'Category not shearch ',
      });
    }

    return response.json(getCategory);
  }
  async delete(requeste, response) {
    const { id } = requeste.params;

    const getCategory = await CategoryShema.findByIdAndDelete({
      _id: id,
    });
    response.json(getCategory);
  }
}

module.exports = new CategoryController();
