const express = require("express");
const ClientController = require("../Controllers/ClientController");
const router = express.Router();

router.get("/", (request, result) => {
  ClientController.getAllClient(request, result);
});

router.get("/:id", (request, result) => {
  ClientController.getClientById(request, result);
});

router.post("/", (request, result) => {
  ClientController.addClient(request, result);
});

router.patch("/:id", (request, result) => {
  ClientController.updateClient(request, result);
});

router.delete("/:id", (request, result) => {
  ClientController.deleteClient(request, result);
});

module.exports = router;