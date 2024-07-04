const express = require("express");
const PaiementController = require("../Controllers/PaiementController");
const router = express.Router();

router.get("/", (request, result) => {
    PaiementController.getAllPaiement(request, result);
});

router.get("/:id", (request, result) => {
    PaiementController.getPaiementById(request, result);
  });

module.exports = router;