const express = require("express");
const CategorieController = require("../Controllers/CategorieController");
const router = express.Router();

router.get("/", (request, result) => {
  CategorieController.getAllCategorie(request, result);
});

router.get("/:id", (request, result) => {
  CategorieController.getCategorieById(request, result);
});

router.post("/", (request, result) => {
  CategorieController.addCategorie(request, result);
});

module.exports = router;
