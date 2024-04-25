import express from "express";
import mainRoute from "./routes/index.js";
import start from "./db/index.js";
import cors from "cors";
import { mongoURI } from "./config.js";

const app = express();
const port = 3000;

//Enable cors middleware to allow requests from any origin
app.use(cors());
app.use(express.json());

start(mongoURI);

mainRoute(app);
app.listen(port, () => console.log(`Example listening at port ${port}`));

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
