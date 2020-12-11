const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Go to /remedy/recommendation');
  });

app.get('/remedy/recommendation', (req, res) => {
  res.send('Here will be the ticket group recommendation.');
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});