const Destination = require("../Models/Destination");

class DestinationService {

  async getAllDestination() {
    return await Destination.findAll();
  }

  async getDestinationById(destinationId) {
    return await Destination.findByPk(destinationId);
  }
}

module.exports = new DestinationService();
