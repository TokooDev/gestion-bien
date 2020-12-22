import { Bien } from './../biens/list-biens/bien';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BiensService {
  private biens: Bien[]
    = [
    {
      id: 1,
      title: "Studio",
      description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page.",
      price: 400000,
      image: 'https://source.unsplash.com/1080x720/?home',
      state: true,
      category: 'Maison',
      sale: false,
      createdAt: new Date(2020, 9, 1, 23, 43)
    },
    {
      id: 2,
      title: "BMW X6",
      description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page.",
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
      description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page.",
      price: 12000000,
      image: 'https://source.unsplash.com/1080x720/?car',
      state: true,
      category: 'Voiture',
      sale: false,
      createdAt: new Date(2019, 11, 13, 10, 54)
    },
    {
      id: 4,
      title: "Appartenet F4",
      description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page.",
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
      description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page.",
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
      description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page.",
      price: 80000000,
      image: 'https://source.unsplash.com/1080x720/?book',
      state: true,
      category: 'Livre',
      sale: false,
      createdAt: new Date(2020, 1, 15, 23, 45)
    }

  ];

  constructor() { }

  getAllBiens():Bien[]{
    return this.biens;
  }

  getBienById(id: number){
    const bienFound = this.biens.find(
      (b:Bien)=>{
        return b.id === id;
      }
    );
    return bienFound;
  }

  addBien(newBien: Bien){
    this.biens.push(newBien);

  }

  // updateBien(updatedBien: Bien){
  //   var oldBien: Bien = this.biens.find(
  //     (b:Bien)=>{
  //       return b.id === updatedBien.id
  //     }
  //   );
  //   if(oldBien){
  //     oldBien = {...updatedBien};
  //   }
  // }

  getLastId(): number{
    return this.biens[this.biens.length - 1] ?
      this.biens[this.biens.length - 1].id : 0;
  }
}
