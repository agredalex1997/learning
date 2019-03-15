const path = require('path');

//Base file name
console.log(path.basename(__filename));

//Directory name
console.log(path.dirname(__filename)); //same as __dirname
//console.log(__dirname);

//File extension
console.log(path.extname(__filename));

//Create path object
pathObject = path.parse(__filename);
console.log(pathObject);

//Concatenate paths
console.log(path.join(__dirname, "hello.html", "hi.html"));