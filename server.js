const http = require('http');
const mongodb = require('mongodb').MongoClient


const hostname = '127.0.0.1';
const port = 3000;

let db;
let connectionString = `mongodb://localhost:27017/namesDatabase`

mongodb.connect(
    connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (err, client) {
      db = client.db()
    }
  )

const server = http.createServer((req, res) => {
    const nameObject = { name: 'Christian' };
    db.collection('namesCollection').insertOne(nameObject, function (err, info) {
        //executes after the insertion.
        res.statusCode = 201;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Name created');
    })
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});