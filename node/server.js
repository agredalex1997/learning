const http = require("http");

const server = http.createServer();

server.listen(5000);

server.on("request", function (req, res) {
    console.log(`METHOD: ${req.method}
URL: ${req.url}`);

    res.writeHead('200', {
        "Content-Type": "text"
    });
    res.write('Hello, world!');
    res.end();
});