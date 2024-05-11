const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Sample route to handle GET requests
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Sample route to handle POST requests
app.post('/api/data', (req, res) => {
  const { data } = req.body;
  console.log('Received data:', data);
  res.send('Data received!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
