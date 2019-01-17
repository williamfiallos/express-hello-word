// First, require all the installed packages
// We name it however we want
const express = require('express'); //'express' is name of packaged installed

// We create our own server named app
// Express server handling requests and responses
const app = express();

app.use(express.static('public'));


// '/' means localhost:3000
// callback function as 2nd argument
app.get('/', (request, response, next) => {
  console.log("Something here will be displayed in the browser.");
  // response.send('<p>Hello there, <b>Ironhackers</b>!!!</p>');
  response.sendFile(__dirname + '/views/home.html');
});

app.get('/cat', (req, res, next) => {
  // res.send('src="/images/cool-cat.jpg');
  res.sendFile(__dirname + '/views/cat.html');
});

app.listen(3000, () => console.log("My first express app running on port 3000."));