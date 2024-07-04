const Categorie = require("../Models/Categorie");

class CategorieService {
  
  async getAllCategorie() {
    return await Categorie.findAll();
  }

  async getCategorieById(categorieId) {
    return await Categorie.findByPk(categorieId);
  }

}

module.exports = new CategorieService();