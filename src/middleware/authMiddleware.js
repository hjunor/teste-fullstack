const JWT = require('jsonwebtoken');
require('dotenv').config();
module.exports = async (request, response, next) => {
  const { authorization } = request.headers;

  if (!authorization) {
    response.sendStatus(401);
  }

  const token = authorization.replace('Bearer', ' ').trim();

  try {
    const data = await JWT.verify(token, process.env.TOKEN);

    const { id } = data;

    request.userId = id;

    return next();
  } catch (error) {
    response.sendStatus(401);
  }
};
