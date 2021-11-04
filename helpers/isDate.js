const moment = require('moment');

const isDate = (value) => {
  // Si retorna false al check falla la validacion

  if (!value) {
    return false;
  }

  const fecha = moment(value);

  if (fecha.isValid()) {
    return true;
  } else {
    return false;
  }
};

module.exports = { isDate };
