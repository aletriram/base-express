var express = require('express');
var router = express.Router();

var usuarios = [
	{ id: 0, nombre: 'Usuario1', apellidos: 'Apellidos1', email: 'email1@existo.es'},
	{ id: 1, nombre: 'Usuario2', apellidos: 'Apellidos2', email: 'email2@existo.es'},
	{ id: 2, nombre: 'Usuario3', apellidos: 'Apellidos3', email: 'email3@existo.es'}
];
var top = 'users';


/* GET users page */
router.get('/', function(req, res, next) {
	res.render('users/users', { title: 'Usuarios - Base con express', top: top, users: usuarios });
});

router.get('/:id', function (req, res, next) {
	var user = usuarios[req.params.id];
	console.log()
	res.render('users/user', {title: 'Usuario', top: top, user: user})
});

module.exports = router;
