const express = require("express");
const auth = require("../middleware/auth").default;
const notificationController = require("../controllers/notificationController");

const notificationRouter = express.Router();

notificationRouter.get(
  "/getallnotifs",
  auth,
  notificationController.getallnotifs
);

module.exports = notificationRouter;
