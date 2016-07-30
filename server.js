const express = require('express');
const app = express();
const useragent = require('express-useragent');
const port = process.env.PORT || 8080;

app.use(useragent.express());

app.get('/', function(req, res) {
	const resObj = {ipaddress: null, language: null, software: null};
    
    resObj.ipaddress = req.headers['x-forwarded-for'];
    resObj.language = req.headers['accept-language'].split(',')[0];
    resObj.software = req.useragent.browser + ', ' + req.useragent.os;
    

	res.json(resObj);
});

app.listen(port, function() {
	console.log(`The app is listening on port ${port}`);
});
