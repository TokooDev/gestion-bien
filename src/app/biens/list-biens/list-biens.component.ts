import { Bien } from './bien';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-biens',
  templateUrl: './list-biens.component.html',
  styleUrls: ['./list-biens.component.scss']
})
export class ListBiensComponent implements OnInit {
  biens: Bien[]
    = [
    {
      id: 1,
      title: "Studio",
      description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée.",
      price: 400000,
      image: 'https://source.unsplash.com/1080x720/?home',
      state: true,
      category: 'Maison',
      sale: false,
      createdAt: new Date(2020, 11, 13, 23, 43)
    },
    {
      id: 2,
      title: "BMW X6",
      description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée.",
      price: 15000000,
      image: 'https://source.unsplash.com/1080x720/?car',
      state: true,
      category: 'Voiture',
      sale: false,
      createdAt: new Date(2020, 11, 13, 21, 9)
    },
    {
      id: 3,
      title: "BMW X5",
      description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée.",
      price: 12000000,
      image: 'https://source.unsplash.com/1080x720/?car',
      state: true,
      category: 'Voiture',
      sale: false,
      createdAt: new Date(2020, 11, 13, 10, 54)
    },
    {
      id: 4,
      title: "Appartenet F4",
      description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée.",
      price: 45000000,
      image: 'https://source.unsplash.com/1080x720/?room',
      state: false,
      category: 'Appartements',
      sale: false,
      createdAt: new Date(2020, 10, 17, 10, 22)
    },
    {
      id: 5,
      title: "Appartenet F3",
      description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée.",
      price: 35000000,
      image: 'https://source.unsplash.com/1080x720/?bedroom',
      state: false,
      category: 'Appartements',
      sale: false,
      createdAt: new Date(2020, 7, 23, 14, 23)
    },
    {
      id: 6,
      title: "Si longe lettre",
      description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée.",
      price: 80000000,
      image: 'https://source.unsplash.com/1080x720/?book',
      state: true,
      category: 'Livre',
      sale: false,
      createdAt: new Date(2020, 1, 15, 23, 45)
    }

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
