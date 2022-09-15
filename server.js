const http = require('http');
const mongodb = require('mongodb').MongoClient


const hostname = '127.0.0.1';
const port = 3000;

// This example code is based on: https://www.mongodb.com/docs/drivers/node/current/quick-start/
let db;
const uri = "mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&w=majority";

const client = new mongodb(uri);

  async function run() {
    try {
      const database = client.db('test');
      const names = database.collection('names');
      const nameObject = { name: 'Christian' };
      
      names.insertOne(nameObject, function (err, info) {
        console.log("Inserted");
    })

    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  


const server = http.createServer((req, res) => {
    run().catch(console.dir);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});