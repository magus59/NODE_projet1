const express = require("express");
const ReservationController = require("../Controllers/ReservationController");
const router = express.Router();

router.get("/", (request, result) => {
  ReservationController.getAllReservation(request, result);
});

router.get("/:id", (request, result) => {
  ReservationController.getReservationById(request, result);
});

module.exports = router;