var fs = require('fs');
var file = fs.readFile('file.txt', (err, data) => {
	console.log(data.toString());
});

console.log('Outside');
//console.log(file.toString());
