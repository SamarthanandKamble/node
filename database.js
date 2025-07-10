require("dotenv").config();
const { MongoClient } = require("mongodb");

const dbURI = process.env.DB_CONNECTION_STRING;

const client = new MongoClient(dbURI)

async function run() {
  try {
      await client.connect();
        const database = client.db('Hello_World');
    const movies = database.collection('Users');
    
    //Read 
    const collection = await movies.find({}).toArray();
    console.log("Collection:", collection);
        
    } finally {
      await client.close();
    }
}
  console.log("MongoClient",MongoClient);
  
  run().catch(console.dir);