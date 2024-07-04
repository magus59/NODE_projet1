const ReservationService = require('../Services/ReservationService');

class ReservationController {

    async getAllReservation(request, result){
        try {
            const reservations = await ReservationService.getAllReservation();
            result.json(reservations);
        } catch (error) {
            console.log(error);
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération des reservations"})
        }
    }

    async getReservationById(request, result){
        try {
            const reservation = await ReservationService.getReservationById(request.params.id);
            result.json(reservation);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération de la reservation"})
        }
    }
}

module.exports = new ReservationController();