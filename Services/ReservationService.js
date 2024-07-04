const Reservation = require("../Models/Paiement");

class ReservationService {
  async getAllReservation() {
    return await Reservation.findAll();
  }

  async getReservationById(reservationId) {
    return await Reservation.findByPk(reservationId);
  }
}

module.exports = new ReservationService();
