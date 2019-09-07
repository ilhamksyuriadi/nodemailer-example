const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer= require('nodemailer');
const path = require('path')

const app = express();

//View engine
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars');
app.locals.layout = false;

//Static folder
app.use(express.static(path.join(__dirname, "public")));

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.render('contact')
});

app.listen(3000, () => console.log('Server started'))