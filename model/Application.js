import mongoose, { Schema } from "mongoose";
import { Status } from "./Status.js";

const Application = new Schema({
  companyName: String,
  position: String,
  applicationDate: { type: Date, default: Date.now },
  jd: String,
  hrEmail: String,
  applyThrough: String,
  status: { type: String, default: Status.New.value },
});

export default mongoose.model("Application", Application);
