var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Base con express', top: 'index' });
});

router.get('/report', function(req, res, next) {
	res.download('about_blank.pdf', 'informe.pdf', function (err) {
		if (err) {
			console.log('Informe no encontrado');
		} else {

		}
	})
});

module.exports = router;
