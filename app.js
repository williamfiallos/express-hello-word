// First, require all the installed packages
// We name it however we want
const express = require('express'); //'express' is name of packaged installed

// We create our own server named app
// Express server will be handling requests and responses
const app = express();

// Middleware
// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route:
// callback function as 2nd argument. This is the function that will be called when 
// someone makes a request to /home (in this example) or to /some-route in some other case
app.get('/home', (request, response, next) => {
  // console.log(request);
  response.sendFile(__dirname + '/views/home-page.html');
});
// Or
// app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home-page.html'));

// cat route:
app.get('/cat', (request, response, next) => {
  // console.log(__dirname);
  response.sendFile(__dirname + '/views/cat-page.html');
});
// Or
// app.get('/cat', (request, response, next) => response.sendFile(__dirname + '/views/cat-page.html'));

app.listen(8080, () => console.log("My first express app running on port 8080."));