import MainController from "../controllers/MainController.js";
import express from "express";

const applicationRouter = express.Router();
applicationRouter.get("/", MainController.fetch);

applicationRouter.get("/status", MainController.status);
applicationRouter.post("/create", MainController.save);
applicationRouter.put("/:id", MainController.update);

export default applicationRouter;
