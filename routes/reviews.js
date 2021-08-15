const express = require('express');
const router = express.Router({mergeParams: true});

/* GET index post/:id/reviews. */
router.get('/', function(req, res, next) {
    res.send('INDEX /post/:id/reviews');
  });

/* GET index reviews/new */
router.get('/new', function(req, res, next) {
  res.send('NEW /post/:id/reviews');
});

/* reviews index create post/:id/reviews. */
router.post('/', function(req, res, next) {
  res.send('CREATE /reviews');
});

/* GET index edit post/:review_id/reviews/edit */
router.get('/:review_id/edit', function(req, res, next) {
  res.send('EDIT /reviews/:review_id/edit');
});

/* PUT reviews update /reviews/:review_id */
router.put('/:review_id', function(req, res, next) {
  res.send('UPDATE /reviews/:review_id');
});

/* GET index destroy /reviews/:review_id */
router.delete('/:review_id', function(req, res, next) {
  res.send('DELETE /reviews/:review_id');
});


module.exports = router;

// GET Index       /post
// GET new         /post/new
// POST create     /post
// POST show       /post/:id  
// GET edit        /post/:id/edit
// PUT update      /post/:id
// DELETE destroy  /post/:id
  