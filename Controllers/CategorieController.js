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
}

module.exports = new CategorieController();