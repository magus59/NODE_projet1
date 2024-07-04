const Categorie = require("../Models/Categorie");

class CategorieService {
  
  async getAllCategorie() {
    return await Categorie.findAll();
  }

  async getCategorieById(categorieId) {
    return await Categorie.findByPk(categorieId);
  }

  async addCategorie(categorie){
    return await Categorie.create(categorie);
  }

}

module.exports = new CategorieService();