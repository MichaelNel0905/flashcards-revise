const express = require('express') // set variable to require express package
const path = require('path') // set variable to require path
const PORT = process.env.PORT || 5000 // set variable to define port

express()
  .use(express.static(path.join(__dirname, 'public'))) // line to join public path with nodejs
  .set('views', path.join(__dirname, 'views')) // line to join views path with nodejs
  .set('view engine', 'ejs') // the language node understands
  .get('/', (req, res) => res.render('index')) // gets / and sends index path=
  .listen(PORT, () => console.log(`Listening on ${ PORT }`)) // listens on port 5000 for development
