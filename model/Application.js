const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Status = require("./Status.js"); // Assuming Status.js uses CommonJS as well

const applicationSchema = new Schema({
  companyName: String,
  position: String,
  applicationDate: { type: Date, default: Date.now },
  jd: String,
  hrEmail: String,
  applyThrough: String,
  status: { type: String, default: Status.New.value },
});

module.exports = mongoose.model("Application", applicationSchema);
