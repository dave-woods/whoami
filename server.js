const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', function(req, res) {
	const resObj = {ipaddress: null, language: null, software: null};


	res.json(resObj);
});

app.listen(port, function() {
	console.log(`The app is listening on port ${port}`);
});
