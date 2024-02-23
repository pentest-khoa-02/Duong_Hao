// import thu vien express
const express = require("express");
const { engine } = require('express-handlebars');
const path = require("path");
// tao app, express() la 1 function tra ve 1 object
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '/public')));

console.log(path.join(__dirname, '/public'))

console.log(path.join(__dirname, '/public'));

// Template handlebars
app.engine('hbs', engine(
    {extname: '.hbs'}
));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/resources/views'))

app.get("/home", (req, res) => {
  res.render('home');
});

app.get("/news", (req, res) =>{
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
