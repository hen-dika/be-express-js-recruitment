const Event = require('../models').Event;
var multer  = require('multer');
var fileUpload = require('../middlewares/uploadMiddleware');
const makeId = (long) => {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
    for ( var i = 0; i < long; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

module.exports = {
  list(req, res) {
    return Event
      .findAll()
      .then((events) => res.status(200).send(events))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Event
      .findOne({
        where: {
          eventId: req.params.id
        }
      })
      .then((event) => {
        if (!event) {
          return res.status(404).send({
            message: 'Event Not Found',
          });
        }
        return res.status(200).send(event);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Event
      .create({
        eventId: makeId(30),
        eventName: req.body.eventName,
        eventLocation: req.body.eventLocation,
        eventImage: req.body.eventLocation,
        eventStartDate: req.body.eventStartDate,
        eventEndDate: req.body.eventEndDate
      })
      .then((event) => res.status(201).send(event))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Event
      .findOne({
        where: {
          eventId: req.params.id
        }
      })      
      .then(event => {
        if (!event) {
          return res.status(404).send({
            message: 'Event Not Found',
          });
        }
        return event
          .update({
            eventName: req.body.eventName || event.eventName,
            eventLocation: req.body.eventLocation || event.eventLocation,
            eventImage: req.body.eventImage || event.eventImage,
            eventStartDate: req.body.eventStartDate || event.eventStartDate,
            eventEndDate: req.body.eventEndDate || event.eventEndDate,
            eventStartTime: req.body.eventStartTime || event.eventStartTime,
            eventEndTime: req.body.eventEndTime || event.eventEndTime
          })
          .then(() => res.status(200).send(event))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Event
      .findOne({
        where: {
          eventId: req.params.id
        }
      })
      .then(event => {
        if (!event) {
          return res.status(400).send({
            message: 'Event Not Found',
          });
        }
        return event
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};