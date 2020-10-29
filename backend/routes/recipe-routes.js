const path = require('path');
const mysql = require('mysql');

module.exports = function(app, connection) {
    app.get('/', function(req, res) {
        connection.query('SELECT * FROM `recipe_website`.recipes;', function(err, data) {
            (err)? res.send(err): res.json({recipes: data});
        });
    });
};
