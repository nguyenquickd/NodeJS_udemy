const express = require('express');
const router = express.Router();

/* GET index post. */
router.get('/', function(req, res, next) {
    res.send('/post');
  });

/* GET index post/new */
router.get('/new', function(req, res, next) {
  res.send('/post/new');
});

/* POST index create post. */
router.post('/', function(req, res, next) {
  res.send('CREATE /post');
});

/* POST index show /post/:id */
router.get('/:id', function(req, res, next) {
  res.send('SHOW /post/:id');
});

/* GET index edit /post/:id */
router.get('/:id/edit', function(req, res, next) {
  res.send('EDIT /post/:id/edit');
});

/* PUT post update /post/:id */
router.put('/:id', function(req, res, next) {
  res.send('UPDATE /post/:id');
});

/* GET index destroy /post/:id */
router.delete('/:id', function(req, res, next) {
  res.send('DELETE /post/:id');
});


module.exports = router;

// GET Index       /post
// GET new         /post/new
// POST create     /post
// POST show       /post/:id  
// GET edit        /post/:id/edit
// PUT update      /post/:id
// DELETE destroy  /post/:id
  