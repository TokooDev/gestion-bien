import { DetailBienComponent } from './biens/detail-bien/detail-bien.component';
import { AddBienComponent } from './biens/add-bien/add-bien.component';
import { ListBiensComponent } from './biens/list-biens/list-biens.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/biens', pathMatch: 'full'},
  {path: 'biens', component: ListBiensComponent},
  {path: 'biens/add', component: AddBienComponent},
  {path: 'biens/:id', component: DetailBienComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
