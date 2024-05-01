const express = require("express");
const mainRoute = require("./routes/index.js"); // Assuming index.js uses CommonJS as well
const start = require("./db/index.js"); // Assuming index.js uses CommonJS as well
const cors = require("cors");

const app = express();
const port = 3000;

//Enable cors middleware to allow requests from any origin
app.use(cors());
app.use(express.json());

start();

mainRoute(app);
app.listen(port, () => {
  (async () => {
    const connectionString = await getParameter("MONGODB_CONNECTION");
    console.log("MongoDB connection string:", connectionString);
    // Use the connectionString in your MongoDB connection logic
  })();
  console.log(`Example listening at port ${port}`);
});

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
