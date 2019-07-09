import config from './config';

import express from 'express';
const server = express();

server.get('/', (req,res) => {
	res.send('Hello Express');
});

server.get('/about.html', (req,res) => {
	res.send('The about page');
});

server.listen(config.port, () => {
console.info('Express listening on port ', config.port);
});
