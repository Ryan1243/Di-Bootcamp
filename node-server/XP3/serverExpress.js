const express = require('express');
const app = express();

app.get('/', function (req,res){
	res.send('<h1>This is an HTML tag</h2>');
})

app.listen(3000);