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

}
