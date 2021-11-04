/*
    Rutas de Usuarios

    host + /api/auth

*/

const { Router } = require('express');
const router = Router();

const { check } = require('express-validator');

const { newUser, loginUser, renewToken } = require('../controllers/auth');
const { fieldsValidator } = require('../middlewares/fieldsValidator');
const { validateJWT } = require('../middlewares/validate-jwt');

////////////////////////////////////////////////////////////////////////////

router.post(
  '/new',
  [
    //Middlewares
    check('name', 'El nombre es obligatorio').notEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe tener minimo 6 caracteres').isLength({
      min: 6,
    }),
    fieldsValidator,
  ],
  newUser
);

router.post(
  '/',
  [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe tener minimo 6 caracteres').isLength({
      min: 6,
    }),
    fieldsValidator,
  ],
  loginUser
);

router.get('/renew', validateJWT, renewToken);

module.exports = router;
