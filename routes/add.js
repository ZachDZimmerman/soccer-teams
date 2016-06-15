var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('add');
});

router.post('/add', function(req, res, next) {
  knex('team').insert(req.body).then(function() {
    res.redirect('/');
  }).catch(function(err) {
    console.log(err);
    next(err)
  })
});


module.exports = router;
