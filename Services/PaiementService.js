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
}

module.exports = new PaiementService();
