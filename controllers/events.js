const Event = require('../models/Events');

// Obtener Eventos

const getEvents = async (req, res) => {
  const events = await Event.find().populate('user', 'name'); // Añade el usuario que refencia en el objeto de Events

  res.json({
    ok: true,
    events,
  });
};

// Crear Nuevo Evento

const createEvent = async (req, res) => {
  const event = new Event(req.body);

  try {
    event.user = req.uid;

    const eventSave = await event.save();

    res.json({
      ok: true,
      evento: eventSave,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'hable con el Administrador',
    });
  }
};

// Actualizar Evento

const updateEvent = async (req, res) => {
  const eventID = req.params.id;
  const uid = req.uid;

  try {
    const event = await Event.findById(eventID);

    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: 'El evento no existe por ese ID',
      });
    }

    if (event.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: 'No tiene permisos para editar este evento',
      });
    }

    const eventUpdated = {
      ...req.body,
      user: uid,
    };

    const eventUpdate = await Event.findByIdAndUpdate(eventID, eventUpdated, {
      new: true,
    });

    res.json({
      ok: true,
      evento: eventUpdate,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Hable con el Administrador',
    });
  }
};

// Eliminar Evento

const deleteEvent = async (req, res) => {
  const eventID = req.params.id;
  const uid = req.uid;

  try {
    const event = await Event.findById(eventID);

    if (!event) {
      res.status(404).json({
        ok: false,
        msg: 'El evento con el ID indicado no existe',
      });
    }

    if (event.user.toString() !== uid) {
      res.status(401).json({
        ok: false,
        msg: 'No tiene permisos para eliminar este evento',
      });
    }

    await Event.findByIdAndDelete(eventID);

    res.json({
      ok: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Conatacte con el Administrador',
    });
  }

  res.json({
    ok: true,
    msg: 'Evento eliminado',
    eventID,
  });
};

module.exports = { getEvents, createEvent, updateEvent, deleteEvent };
