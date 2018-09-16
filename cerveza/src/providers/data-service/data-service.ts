import { Injectable } from '@angular/core';

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {

  rondas = [];
  total = 0;
  div = 0;

  constructor() {
    
  }
  
  addRonda(obj)
  {
    this.rondas.push(obj);
  }
  

  

}
