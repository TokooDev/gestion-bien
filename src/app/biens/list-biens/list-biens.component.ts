import { BiensService } from './../../services/biens.service';
import { Bien } from './bien';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-biens',
  templateUrl: './list-biens.component.html',
  styleUrls: ['./list-biens.component.scss']
})
export class ListBiensComponent implements OnInit {

  search: string = '';
  biens: Bien[] = [];
  constructor(private biensService: BiensService) { }

  ngOnInit(): void {
    this.biens= this.biensService.getAllBiens();
  }

}
