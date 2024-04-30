const applicationRouter = require("./application.js"); // Assuming application.js uses CommonJS as well

function mainRoute(app) {
  app.use("/application", applicationRouter);
}

module.exports = mainRoute;
