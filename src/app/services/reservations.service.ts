import { Injectable } from '@angular/core';
import {Reservation} from '../biens/reservations-bien/reservation';
import {Bien} from '../biens/list-biens/bien';


@Injectable({
  providedIn: 'root'
})
export class ReservationsService {
  private reservations: Reservation[]
    = [
      {
        id: 1,
        bien: 'Studio Point E',
        price: 40000,
        dure: '5 jours',
        dateReservation: new Date(2020, 9, 1, 23, 43)
      },
      {
        id: 2,
        bien: 'Voiture BMW',
        price: 200000,
        dure: '7 jours',
        dateReservation: new Date(2020, 9, 1, 23, 43)
      },
      {
      id: 3,
      bien: 'Appartement',
      price: 400000,
      dure: '5 jours',
      dateReservation: new Date(2019, 10, 1, 23, 43)
      },
      {
        id: 4,
        bien: 'Livre',
        price: 10000,
        dure: '30 jours',
        dateReservation: new Date(2020, 7, 1, 22, 43)
      },
      {
        id: 5,
        bien: 'Chaussures',
        price: 4000,
        dure: '3 jours',
        dateReservation: new Date(2020, 4, 1, 23, 43)
      },
    ];
  constructor() { }
  getAllReservations():Reservation[]{
    return this.reservations;
  }
}
