import { Component, OnInit } from '@angular/core';
import {Reservation} from './reservation';
import {ReservationsService} from '../../services/reservations.service';

@Component({
  selector: 'app-reservations-bien',
  templateUrl: './reservations-bien.component.html',
  styleUrls: ['./reservations-bien.component.scss']
})
export class ReservationsBienComponent implements OnInit {
  reservations: Reservation[] = [];
  constructor(private reservationService: ReservationsService) { }

  ngOnInit(): void {
    this.reservations = this.reservationService.getAllReservations();
  }

}
