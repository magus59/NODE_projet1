const express = require("express");
const CategorieController = require("../Controllers/CategorieController");
const router = express.Router();

router.get("/", (request, result) => {
    CategorieController.getAllCategorie(request, result);
});

module.exports = router;