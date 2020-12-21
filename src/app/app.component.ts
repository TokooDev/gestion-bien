import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'live-aly';
  active = false;
  lib1 = "Activer le champ";
  lib2 = "Désctiver le champ";
  nom = "Djiby";
  activerChamp(){
    this.active = !this.active;
  }
}
