const Reservation = require("../Models/Reservation");

class ReservationService {
  async getAllReservation() {
    return await Reservation.findAll();
  }

  async getReservationById(reservationId) {
    return await Reservation.findByPk(reservationId);
  }

  async addReservation(reservation){
    return await Reservation.create(reservation);
  }

  async updateReservation(id, reservation){
    return await Reservation.update(reservation, {
      where : {
        RE_ID : id
      }
    });
  }
}

module.exports = new ReservationService();
