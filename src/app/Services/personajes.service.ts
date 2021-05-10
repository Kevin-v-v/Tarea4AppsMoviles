import { Injectable } from '@angular/core';
import { personajesModel } from '../personajes/personajes.model';

@Injectable({
  providedIn: 'root',
})
export class PersonajesService {

  generalData: personajesModel.RootObject;

  constructor() {}


  // search() {
  //   this.currentApiURL = 'https://rickandmortyapi.com/api/character';
  //   this.fetchPersonajes();
  // }

  async fetchPersonajes(url:string) {
    window.scroll(0, 0);
    debugger;
    const data = await fetch(url);
    const response:personajesModel.RootObject = await data.json();
    this.generalData = response;
    return this.generalData;

  }
}
