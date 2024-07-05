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

  async updateDestination(id, destination){
    return await Destination.update(destination, {
      where : {
        DE_ID : id
      }
    });
  }

  async deleteDestination(id){
    return await Destination.destroy({
      where : {
        DE_ID : id
      }
    });
  }
}

module.exports = new DestinationService();
