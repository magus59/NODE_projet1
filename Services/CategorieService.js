const { where } = require("sequelize");
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

  async updateCategorie(id, categorie){
    return await Categorie.update(categorie, {
      where : {
        CA_ID : id
      }
    });
  }

  async deleteCategorie(id){
    return await Categorie.destroy({
      where : {
        CA_ID : id
      }
    });
  }


}

module.exports = new CategorieService();