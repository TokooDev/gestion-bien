import { NotfoundComponent } from './notfound/notfound.component';
import { DetailReservationComponent } from './biens/reservations-bien/detail-reservation/detail-reservation.component';
import { EditReservationComponent } from './biens/reservations-bien/edit-reservation/edit-reservation.component';
import { ReservationsBienComponent } from './biens/reservations-bien/reservations-bien.component';
import { DetailBienComponent } from './biens/detail-bien/detail-bien.component';
import { AddBienComponent } from './biens/add-bien/add-bien.component';
import { ListBiensComponent } from './biens/list-biens/list-biens.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/biens', pathMatch: 'full'},
  {path: 'biens', component: ListBiensComponent},
  {path: 'biens/add', component: AddBienComponent},
  {path: 'biens/:id', component: DetailBienComponent},
  {
    path: 'reservations',
    component: ReservationsBienComponent,
    children:[
      {path: ':id', component: DetailReservationComponent},
      {path: ':id/edit', component: EditReservationComponent},
    ]
  },
  {
    path:'not-found', component: NotfoundComponent,
  },
  {path: '**', redirectTo:'/not-found'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
