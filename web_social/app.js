const express = require("express");
const path = require('path');
const app = express();
const port = 3000;
const route = require('./route');

app.use(express.static(path.join(__dirname, '/public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})