const express = require('express');
const randomId = require('random-id');
const app = express(),
      bodyParser = require("body-parser");
      port = process.env.PORT || 3000;

// place holder for the data
const users = [];

app.use(bodyParser.json());
app.use(express.static(process.cwd() + '/my-app/dist'));

app.get('/api/users', (req, res) => {
  console.log('api/users called!!!!!!!')
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  user.id = randomId(10);
  console.log('Adding user:::::', user);
  users.push(user);
  res.json("user addedd");
});

app.get('/', (req,res) => {
  res.sendFile(process.cwd() + '/my-app/dist/index.html');
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});