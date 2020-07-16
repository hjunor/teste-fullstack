const ProductShema = require('../models/ProductShema');

class ProductController {
  storeOne(request, response) {
    response.json({ storeOne: 'ok' });
  }
  storeAll(request, response) {
    response.json({ storeAll: 'ok' });
  }
  create(request, response) {
    const { id, name, description, price, tag } = request.body;
    response.json({
      create: {
        id,
        name,
        description,
        price,
        tag,
      },
    });
  }
  update(request, response) {
    response.json({ update: 'ok' });
  }
  delete(request, response) {
    response.json({ delete: 'ok' });
  }
}
module.exports = new ProductController();
