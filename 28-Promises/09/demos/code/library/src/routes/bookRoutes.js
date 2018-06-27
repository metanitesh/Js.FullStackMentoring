const express = require('express');
const { MongoClient, ObjectID } = require('mongodb');
const debug = require('debug')('app:bookRoutes');

const bookRouter = express.Router();

const url = 'mongodb://localhost:27017';
const dbName = 'libraryApp';




function router(nav) {
  bookRouter.route('/')
    .get((req, res) => {
      MongoClient.connect(url, function (err, client) {
        client.db(dbName).collection('books').find({}).toArray((err, docs) => {

          
          

          res.send(docs);
          client.close();
        })
      });  
    });




  bookRouter.route('/promise')
    .get((req, res) => {
  
      MongoClient.connect(url).then((client) => {
        return client.db(dbName)
      }).then((db) => {
        return db.collection('books').find({}).toArray();
      }).then((docs) => {
        res.send(docs);
        client.close();
      }).catch((err) => {
        res.send(err);
      })

    });


    bookRouter.route('/generators')
    .get((req, res) => {

      (async function mongo(){

        const client = await MongoClient.connect(url);  
        const db = client.db(dbName);
        const collection = await db.collection('books');
        const books = await collection.find({}).toArray();
        res.send(books)

      })()

    });

  bookRouter.route('/:id')
    .get((req, res) => {
      const { id } = req.params;
      const url = 'mongodb://localhost:27017';
      const dbName = 'libraryApp';

      (async function mongo() {
        let client;
        try {
          client = await MongoClient.connect(url);
          debug('Connected correctly to server');

          const db = client.db(dbName);

          const col = await db.collection('books');

          const book = await col.findOne({ _id: new ObjectID(id) });
          debug(book);
          res.render(
            'bookView',
            {
              nav,
              title: 'Library',
              book
            }
          );
        } catch (err) {
          debug(err.stack);
        }
      }());
    });
  return bookRouter;
}


module.exports = router;
