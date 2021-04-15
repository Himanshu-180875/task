const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const passportlocal= require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
// const bcrypt = require('bcryptjs');
const config = require('config');
const session = require('express-session');



const app = express();
app.use(express.json());

const db= config.get('mongoURI');

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err)); 

app.use('/api/tasks', require('./routes/taskroutes'));
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`server has started on port ${port}`));


