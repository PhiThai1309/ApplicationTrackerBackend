const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

const uri = process.env.MONGODB_CONNECTION;
console.log(uri);
console.log(process.env.MONGODB_CONNECTION);

async function start() {
  try {
    await mongoose.connect(uri, {
      authSource: "admin",
      ssl: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = start;

// const uri = mongoURI;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });
// async function start() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("application-tracker").collection("applications");
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } catch (error) {
//     console.log("Fail");
//   }
// }

// export default start;
