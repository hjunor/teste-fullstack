const UserShema = require('../models/UserShema');

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body;

    const user = await UserShema.create({
      name,
      email,
      password,
    }).catch(async () => {
      const saida = await UserShema.find({
        email: { $in: [email.toLowerCase()] },
      });

      if (saida.length > 0) {
        if (saida[0].email || saida === email.toLowerCase()) {
          return response.status(401).send({
            message: ` email ja cadastrado`,
          });
        }
      }

      return response.status(404).send({
        message: 'error nos parametros',
      });
    });

    return response.json({ message: 'usuário cadastrado com sucesso' });
  }
}

module.exports = new UsersController();
