const express = require('express');
const app = express();
const port = 3000;

// Route for /name
app.get('/name', (req, res) => {
  res.status(200).send('NATNAEL DAGNACHEW TEFERI');  
});

// Route for /hobby
app.get('/hobby', (req, res) => {
  const hobby = {
    favoriteHobby: [
    'playing playstation',
    'watching movies',
    'watching football games united fan'
    ]
  };
  res.status(200).json(hobby);
});

// Route for /dream
app.get('/dream', (req, res) => {
  res.status(200).send('My dream is to become a software engineer who builds innovative technology.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
