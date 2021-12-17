const { Router } = require('express');
const path = require('path');

const router = Router();

router.get('/', (req, res) => {
	console.log('llegue');
	res.sendFile(path.join(__dirname, '../public/www/index.html'));
});

module.exports = router;
