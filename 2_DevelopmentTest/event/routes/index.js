var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
const eventController = require('../controllers').event;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Event Router */
router.get('/api/event', eventController.list);
router.get('/api/event/:id', eventController.getById);
router.post('/api/event', eventController.add);
router.put('/api/event/:id', eventController.update);
router.delete('/api/event/:id', eventController.delete);

module.exports = router;
