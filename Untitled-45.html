f// Importing necessary modules
const http = require('http');
const fs = require('fs');
const path = require('path');

// Creating server
const server = http.createServer((req, res) => {
    // Handling requests

    // Set content type
    res.setHeader('Content-Type', 'text/html');

    // Routing
    let filePath = './public' + req.url;
    if (filePath == './public/') {
        filePath = './public/index.html';
    }

    // Serving static files
    const extname = path.extname(filePath);
    let contentType = 'text/html';
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENOENT') {
                // Page not found
                fs.readFile('./public/404.html', (err, content) => {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf8');
                });
            } else {
                // Server error
                res.writeHead(500);
                res.end('Server Error: ' + err.code);
            }
        } else {
            // Success
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
        }
    });
});

// Setting up the port
const PORT = process.env.PORT || 3000;

// Listening to the server
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
