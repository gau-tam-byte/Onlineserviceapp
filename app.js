const express = require('express');
const path = require('path');
const cookieparser = require('cookie-parser');
const session = require('express-session')
const passport = require('passport');
// require('../Backend/db/dbconnection');
const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})
const mongoose = require('mongoose')
// const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})
// const mongoose = require('mongoose')

const db = process.env.DATABASE
// const db = 'mongodb://127.0.0.1:27017/?directConnection=true';
mongoose.connect(db).then(()=>{
  console.log("connection success")
}).catch((err) =>{
  console.log(console.error(err),"connection not sucess")
})

// const path = require('path')
// const mongoose = require('mongoose');
// const morgan = require('morgan')
// const expressHandlerbars = require('express-handlebars')
// const flash = require('connect-flash');
// mongoose.Promise= global.Promise
// mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true')

// 1 
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieparser())
app.use(session({
  cookie: { maxAge: 1000000 },
  secret: 'connect.sid',
  saveUninitialized: true,
  resave: false,
}));

app.use(passport.initialize())
app.use(passport.session())




app.use('/',require('./routes/index'))
app.use('/',require('./routes/users'))

app.use(express.static(path.join(__dirname, "client")))

app.get('*', (req,res)=>{
  res.sendFile(path.resolve(__dirname,'client/build/index.html'))
})

// if (process.env.NODE_ENV === 'production') {
//   //*Set static folder up in production
//   app.use(express.static('client/build'));

//   app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));
// }

const port = process.env.PORT
app.listen(port, () => console.log('Server started listening on port 5000!' ,{port}))