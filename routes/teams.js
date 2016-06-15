var express = require('express');
var router = express.Router();
var knex = require('../db/knex');


/* GET users listing. */
router.get('/', function(req, res, next) {
    knex('team').select().then(function(team) {
        res.render('teams', {team: team});
    });

});

module.exports = router;
