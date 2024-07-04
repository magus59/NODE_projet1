const Paiement = require("../Models/Paiement");

class PaiementService {
  async getAllPaiement() {
    return await Paiement.findAll();
  }

  async getPaiementById(paiementId) {
    return await Paiement.findByPk(paiementId);
  }
}

module.exports = new PaiementService();
