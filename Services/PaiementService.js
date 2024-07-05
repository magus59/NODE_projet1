const Paiement = require("../Models/Paiement");

class PaiementService {
  async getAllPaiement() {
    return await Paiement.findAll();
  }

  async getPaiementById(paiementId) {
    return await Paiement.findByPk(paiementId);
  }

  async addPaiement(paiement){
    return await Paiement.create(paiement);
  }

  
  async updatePaiement(id, paiement){
    return await Paiement.update(paiement, {
      where : {
        PA_ID : id
      }
    });
  }
}

module.exports = new PaiementService();
