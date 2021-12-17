const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('./src/routes');
const port = 3000;

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/reader', routes);
app.listen(port, () => {
	console.log(`Escuchando en el puerto ${port}`);
});
