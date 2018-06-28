const express = require('express');
const app = express();
const port = 3000;
const { MongoClient } = require('mongodb');
const authRouter = require('./auth');
const path = require('path');
const { Strategy } = require('passport-local');

const bodyParser = require('body-parser');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(express.static(path.join(__dirname, '/public/')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(session({ secret: 'library' }));


app.use(passport.initialize());
app.use(passport.session());

// Stores user in session
passport.serializeUser((user, done) => {
  done(null, user);
});

// Retrieves user from session
passport.deserializeUser((user, done) => {
  done(null, user);
});


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
          console.log('Connected correctly to server');
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
  


app.route('/auth/sign-up')
    .post((req, res) => {

        const { username, password } = req.body;
        const url = 'mongodb://localhost:27017';
        const dbName = 'libraryApp';


        console.log("here");
        (async function addUser() {
            let client;
            try {
                client = await MongoClient.connect(url);
                console.log('Connected correctly to server');

                const db = client.db(dbName);

                const col = db.collection('users');
                const user = { username, password };
                const results = await col.insertOne(user);
                
                // debug(results);
                req.login(results.ops[0], () => {
                    res.redirect('/auth/profile');
                  });
                
                // req.login(results.ops[0], () => {

                // });
            } catch (err) {
                console.log(err);
                // debug(err);
            }
        }());

    })

app.route('/auth/sign-in')
    .post(passport.authenticate('local', {
        successRedirect: '/protected',
        failureRedirect: '/'
    }))

app.route('/auth/profile')
    .get((req, res)=>{
        console.log(req.user);
        
        res.send("singin");
    })


app.route("/protected")
    .get((req, res)=>{
        console.log(req.user)
        
        if(!req.user){
            res.send("Permission denied")
        }else{
            res.send("Welcome");
        }

        

    })

app.route("/logout")
    .post((req, res)=>{
        req.session.destroy()
        res.redirect("/");
    })

app.listen(port, () => {
    console.log(`listening on port${port}`);
});
