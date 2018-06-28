const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const { Strategy } = require('passport-local');



const bodyParser = require('body-parser');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');


const app = express();
const port = process.env.PORT || 3000;


app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'library' }));

passport.use(new Strategy(
  {
    usernameField: 'username',
    passwordField: 'password'
  }, (username, password, done) => {
    const url = 'mongodb://localhost:27017';
    const dbName = 'libraryApp';
    (async function mongo() {
      let client;

      try {
        client = await MongoClient.connect(url);

        debug('Connected correctly to server');

        const db = client.db(dbName);
        const col = db.collection('users');

        const user = await col.findOne({ username });

        if (user.password === password) {
          done(null, user);
        } else {
          done(null, false);
        }
      } catch (err) {
        console.log(err.stack);
      }
      // Close connection
      client.close();
    }());
  }));



app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

const nav = [
  { link: '/books', title: 'Book' },
  { link: '/authors', title: 'Author' }
];

const authRouter = require('./src/routes/authRoutes')(nav);



const bookRouter = require('./src/routes/bookRoutes')(nav);
const adminRouter = require('./src/routes/adminRoutes')(nav);


app.use('/books', bookRouter);
app.use('/admin', adminRouter);
app.use('/auth', authRouter);

app.get('/', (req, res) => {
  res.render(
    'index',
    {
      nav: [{ link: '/books', title: 'Books' },
      { link: '/authors', title: 'Authors' }],
      title: 'Library'
    }
  );
});

app.listen(port, () => {
  debug(`listening on port ${chalk.green(port)}`);
});
