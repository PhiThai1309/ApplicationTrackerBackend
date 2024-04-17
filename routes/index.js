import applicationRouter from "./application.js";

function mainRoute(app) {
  app.use("/application", applicationRouter);
}

export default mainRoute;
