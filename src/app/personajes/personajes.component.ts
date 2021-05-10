import { PersonajesService } from './../Services/personajes.service';
import { Component, Input, OnInit } from '@angular/core';
import { personajesModel } from './personajes.model';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss'],
})
export class PersonajesComponent implements OnInit {

  @Input() name:string;

  constructor(private personajesService : PersonajesService) { }
  nextPage: string = '';
  lastPage: string = '';
  currentApiURL: string = '';
  processing: boolean;
  generalData : personajesModel.RootObject;
  notFound:boolean;
  ngOnInit() {
    this.generalData = <personajesModel.RootObject>{};

    this.processing = false;
  }
  async search(){
    this.notFound=false;
    console.log(this.name);
    this.currentApiURL= `https://rickandmortyapi.com/api/character/?name=${this.name}`;
    this.processing=true;
    this.generalData=await this.personajesService.fetchPersonajes(this.currentApiURL);
    console.log(this.generalData);

    if(!this.generalData.info){
      //si no existe el objeto info significa que ha habido un error
      this.notFound=true;
    }
    console.log(this.notFound);
    this.processing=false;
  }
  async next() {
    this.currentApiURL = this.generalData.info.next;
    this.processing=true;
    this.generalData=await this.personajesService.fetchPersonajes(this.currentApiURL);
    this.processing=false;
  }

  async back() {
    this.currentApiURL = this.generalData.info.prev;
    this.processing=true;
    this.generalData=await this.personajesService.fetchPersonajes(this.currentApiURL);
    this.processing=false;
  }
}
