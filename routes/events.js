/*
    Rutas de Usuarios

    host + /api/events

*/

const { validateJWT } = require('../middlewares/validate-jwt');
const { check } = require('express-validator');
const { Router } = require('express');
const router = Router();

router.use(validateJWT); // Esto pasa el middleware a todas las rutas que estam debajo de esta instruccion

const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require('../controllers/events');

const { fieldsValidator } = require('../middlewares/fieldsValidator');
const { isDate } = require('../helpers/isDate');

router.get('/', getEvents);

// Custom puede usar una funcion que sea propia para validar

router.post(
  '/',
  [
    check('title', 'El titulo es obligatirio').notEmpty(),
    check('start', 'Fecha de inicio es obligartoria').custom(isDate),
    check('end', 'Fecha de fin es obligartoria').custom(isDate),
    fieldsValidator,
  ],
  createEvent
);

router.put(
  '/:id',
  [
    check('title', 'El titulo es obligatirio').notEmpty(),
    check('start', 'Fecha de inicio es obligartoria').custom(isDate),
    check('end', 'Fecha de fin es obligartoria').custom(isDate),
    fieldsValidator,
  ],
  updateEvent
);

router.delete('/:id', deleteEvent);

module.exports = router;
