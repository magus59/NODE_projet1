const CategorieService = require('../Services/CategorieService');

class CategorieController {

    async getAllCategorie(request, result){
        try {
            const categories = await CategorieService.getAllCategorie();
            result.json(categories);
        } catch (error) {
            console.log(error);
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération des categories"})
        }
    }

    async getCategorieById(request, result){
        try {
            const categorie = await CategorieService.getCategorieById(request.params.id);
            result.json(categorie);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération de la categorie"})
        }
    }

    async addCategorie(request, result){
        try {
            const categorie = await CategorieService.addCategorie(request.body);
            result.json(categorie);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de l'ajout de la categorie"})
        }
    }

    async updateCategorie(request, result){
        try {
            const categorie = await CategorieService.updateCategorie(request.params.id, request.body);
            result.json(categorie);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la modification de la categorie"})
        }
    }

    async deleteCategorie(request, result){
        try {
            const categorie = await CategorieService.deleteCategorie(request.params.id);
            result.json(categorie);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la suppression de la categorie"})
        }
    }
}

module.exports = new CategorieController();