const DestinationService = require('../Services/DestinationService');

class DestinationController {

    async getAllDestination(request, result){
        try {
            const destinations = await DestinationService.getAllDestination();
            result.json(destinations);
        } catch (error) {
            console.log(error);
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération des destinations"})
        }
    }

    async getDestinationById(request, result){
        try {
            const destination = await DestinationService.getDestinationById(request.params.id);
            result.json(destination);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération de la destination"})
        }
    }
}

module.exports = new DestinationController();