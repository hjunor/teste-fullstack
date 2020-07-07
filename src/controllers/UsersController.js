const UserShema = require('../models/UserShema');

class UsersController {
  async store(request, response, next) {
    const usersDb = await UserShema.find();

    const users = usersDb.map((user) => {
      return { id: user._id, name: user.name };
    });

    return response.json(users);
  }

  async create(request, response) {
    const { name, email, password } = request.body;

    function validateEmail(email) {
      const regex = /\S+@\S+\.\S+/;
      return regex.test(String(email).toLowerCase());
    }

    const result = validateEmail(email);

    if (!result) {
      return response.json({ user: 'Email invalido' });
    }

    UserShema.find({
      email: { $in: [email.toLowerCase()] },
    })
      .then(async (user) => {
        const newUser = await UserShema.create({
          name,
          email,
          password,
        });

        return response.json({ message: 'Usuario Cadastrado com sucesso' });
      })
      .catch((error) => {
        return response.json({ message: 'Usuario Exixtente na Base de dados' });
      });
  }
}

module.exports = new UsersController();
