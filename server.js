import config from './config';
import apiRouter from './api';
// import fs from 'fs';

import express from 'express';
const server = express();

server.set('view engine', 'ejs');

server.get('/', (req,res) => {
	res.render('index', {
		content: 'Hello Express and <em>EJS</em>'
	});
});

server.use('/api', apiRouter );

// this line replaces all the lines below by moving about.html from root to public folder, and fs module is no longer required also
server.use(express.static('public'));

// server.get('/about.html', (req,res) => {
// 	fs.readFile('./about.html', (err,data) => {
// 		res.send(data.toString());
// 	});
// });

server.listen(config.port, () => {
console.info('Express listening on port ', config.port);
});
