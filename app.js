const express = require('express');
const app = express();
const router = require('./routers/router');
const path = require('path')
const bodyParser = require('body-parser');
const ejs = require('ejs');
require('dotenv').config()
app.set('view engine', 'ejs');
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/public', express.static(path.join(__dirname, 'public')))

require('./config/database')


app.use('/', router);


app.listen(process.env.PORT || 3000, () => {
    console.log("Sunucu Çalıştı..");
})