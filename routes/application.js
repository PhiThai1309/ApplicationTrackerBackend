const express = require("express");
const MainController = require("../controllers/MainController.js"); // Assuming MainController uses CommonJS as well

const applicationRouter = express.Router();

applicationRouter.get("/", MainController.fetch);
applicationRouter.get("/status", MainController.status);
applicationRouter.post("/create", MainController.save);
applicationRouter.put("/:id", MainController.update);
applicationRouter.delete("/:id", MainController.delete);

module.exports = applicationRouter;
