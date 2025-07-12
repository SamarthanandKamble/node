require("dotenv").config();
const { MongoClient } = require("mongodb");

const dbURI = process.env.DB_CONNECTION_STRING;

const client = new MongoClient(dbURI)

async function run() {
  try {
      await client.connect();
        const database = client.db('Hello_World');
    const users = database.collection('Users');
    
    //Insert
    const newUser = {
      name: "Samarth",
      age: 22,
      dob: "10/02/2001",
      city:"Pune"
    }

    // const inserted = await database.collection('Users').insertOne(newUser);
    // console.log("inserted:", inserted);

    //Delete

    // const deletedDoc = await users.deleteMany({ age: 22 });
    // console.log("Deleted Document:", deletedDoc);


    // const insertedNewUser = await users.insertOne(newUser)
    // console.log("Inserted New User:", insertedNewUser);
    
    // Update
    
const updatedUser = await users.updateOne(
      { name: "Samarthanand Kamble" },
      { $set:{ age:24} }
);
    console.log("Updated User:", updatedUser);
    


    //Read 
    const newCollection = await users.find({ }).toArray();
    console.log("newCollection", newCollection);
    
    
        
    } finally {
      await client.close();
    }
}
  
  run().catch(console.dir);