const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'surf-shop Home' });
});

/* GET register. */
router.get('/register', function(req, res, next) {
  res.send('GET /register')
});

/* postregister. */
router.post('/register', function(req, res, next) {
  res.send('POST /register')
});

/* GET login. */
router.get('/login', function(req, res, next) {
  res.send('GET /login')
});

/* post login. */
router.post('/login', function(req, res, next) {
  res.send('POST /login')
});

/* put profile/:user_id */
router.put('/profile/:user_id', function(req, res, next) {
  res.send('PUT /profile/:user_id')
});

/* GET forgot. */
router.get('/forgot', function(req, res, next) {
  res.send('GET /forgot')
});

/* put forgot. */
router.put('/forgot', function(req, res, next) {
  res.send('PUT /forgot')
});

/* GET reset/:token. */
router.get('/reset/:token', function(req, res, next) {
  res.send('GET /reset')
});

/* put reset/:token. */
router.put('/reset/:token', function(req, res, next) {
  res.send('PUT /reset')
});

module.exports = router;
