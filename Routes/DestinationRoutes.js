const express = require("express");
const DestinationController = require("../Controllers/DestinationController");
const router = express.Router();

router.get("/", (request, result) => {
  DestinationController.getAllDestination(request, result);
});

router.get("/:id", (request, result) => {
  DestinationController.getDestinationById(request, result);
});

router.post("/", (request, result) => {
  DestinationController.addDestination(request, result);
});

router.patch("/:id", (request, result) => {
  DestinationController.updateDestination(request, result);
});

module.exports = router;
