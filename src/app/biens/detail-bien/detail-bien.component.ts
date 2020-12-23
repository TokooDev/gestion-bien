import { BiensService } from './../../services/biens.service';
import { Bien } from './../list-biens/bien';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-bien',
  templateUrl: './detail-bien.component.html',
  styleUrls: ['./detail-bien.component.scss']
})
export class DetailBienComponent implements OnInit {
  //bien: Bien[] = [];
  bien : any;
  constructor(private biensService : BiensService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.bien =this.biensService.getBienById(+this.activatedRoute.snapshot.params.id);
    console.log(this.bien);
  }

}
