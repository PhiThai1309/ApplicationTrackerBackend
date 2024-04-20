import { response } from "express";
import Application from "../model/Application.js";
import { Status } from "../model/Status.js";

class MainController {
  fetch(req, res) {
    Application.find({})
      .sort({ applicationDate: -1 })
      .then((courses) => {
        res.json(courses);
      })
      .catch((error) => console.error(error));
  }

  save(req, res) {
    const newApplication = new Application(req.body);
    console.log(newApplication.applicationDate.toISOString());
    var application = new Application({
      companyName: newApplication.companyName,
      position: newApplication.position,
      applicationDate: new Date(newApplication.applicationDate),
      jd: newApplication.jd,
      hrEmail: newApplication.hrEmail,
      applyThrough: newApplication.applyThrough,
      status: newApplication.status,
    });

    application
      .save()
      .then((courses) => {
        // res.status(201).send;
        console.log();
        return res
          .status(201)
          .json({ status: true, result: "Create successful!" });
      })
      .catch((err) => {
        return res.status(err.statusCode).send({ message: err.message });
      });
  }

  status(req, res) {
    // const convertedStatus = Object.entries(Status).map(
    //   ([name, { value, color }]) => ({
    //     name: name.charAt(0).toUpperCase() + name.slice(1), // Convert the name to title case
    //     value: parseInt(value), // Parse the value to an integer
    //     color: color, // Keep the original color
    //   })
    // );
    const convertedStatus = JSON.stringify(Status);
    console.log(convertedStatus);
    return res.json(convertedStatus);
  }

  update(req, res) {
    console.log(req.params.id);
    console.log(req.body);
    Application.updateOne({ _id: req.params.id }, req.body)
      .then((result) => {
        return res
          .status(201)
          .json({ status: true, result: "Edit successful!" });
      })
      .catch((err) => {
        return res.status(err.statusCode).send({ message: err.message });
      });
  }

  delete(req, res) {
    Application.findByIdAndDelete({ _id: req.params.id })
      .then((result) => {
        return res
          .status(201)
          .json({ status: true, result: "Delete successful!" });
      })
      .catch((err) => {
        return res.status(err.statusCode).send({ message: err.message });
      });
  }
}

export default new MainController();
