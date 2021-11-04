const bcrypt = require('bcrypt');
const User = require('../models/User');
const { generateJWT } = require('../helpers/jwt');

const newUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        ok: false,
        msg: 'El email ya existe',
      });
    }

    user = new User(req.body);

    // Encriptar password

    user.password = bcrypt.hashSync(password, 10);

    await user.save();

    // Generar JWT

    const token = await generateJWT(user.id, user.name);

    res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name,
      token,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Hablar con el Administrador',
    });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: 'No existe el email',
      });
    }

    // Match de Password con bcrypt

    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: 'El password no es correcto',
      });
    }

    // Generar JWT

    const token = await generateJWT(user.id, user.name);

    res.json({
      ok: true,
      uid: user.id,
      name: user.name,
      token,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Hable con el Admin',
    });
  }
};

const renewToken = async (req, res) => {
  const { uid, name } = req;

  const token = await generateJWT(uid, name);

  res.json({
    ok: true,
    uid,
    name,
    token,
  });
};

module.exports = { newUser, loginUser, renewToken };
