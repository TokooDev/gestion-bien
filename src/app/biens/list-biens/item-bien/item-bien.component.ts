import { Bien } from './../bien';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-item-bien',
  templateUrl: './item-bien.component.html',
  styleUrls: ['./item-bien.component.scss']
})
export class ItemBienComponent implements OnInit {
  @Input() bien: any;
  constructor() { }

  ngOnInit(): void {
  }

  numberSeparator(nbre: number, sep: string){
    let nombre: string = nbre.toString();
    var reg = /(\d+)(\d{3})/;
    while( reg.test( nombre)) {
      nombre = nombre.replace( reg, '$1' +sep +'$2');
    }
    return nombre;

  }

}
