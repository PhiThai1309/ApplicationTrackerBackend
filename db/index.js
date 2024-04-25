import { connect } from "mongoose";

async function start(url) {
  try {
    await connect(url);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Fail");
  }
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

export default start;
