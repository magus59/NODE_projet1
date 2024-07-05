const ClientService = require('../Services/ClientService');

class ClientController {

    async getAllClient(request, result){
        try {
            const clients = await ClientService.getAllClient();
            result.json(clients);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération des clients"})
        }
    }

    async getClientById(request, result){
        try {
            const client = await ClientService.getClientById(request.params.id);
            result.json(client);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération du client"})
        }
    }

    async addClient(request, result){
        try {
            const client = await ClientService.addClient(request.body);
            result.json(client);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de l'ajout du client"})
        }
    }
    
    async updateClient(request, result){
        try {
            const client = await ClientService.updateClient(request.params.id, request.body);
            result.json(client);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la modification de la client"})
        }
    }
}

module.exports = new ClientController();