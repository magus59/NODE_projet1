const Destination = require("../Models/Destination");

class DestinationService {

  async getAllDestination() {
    return await Destination.findAll();
  }

  async getDestinationById(destinationId) {
    return await Destination.findByPk(destinationId);
  }

  async addDestination(destination){
    return await Destination.create(destination);
  }
}

module.exports = new DestinationService();
