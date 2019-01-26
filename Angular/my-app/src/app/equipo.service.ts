import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo:any[] = [
    {
      nombre:'Ignacio',
      especialidad:'html',
      descripcion: 'lorem ipsum...'
    },
    {
      nombre:'Jose',
      especialidad:'Java',
      descripcion:'hola soy jose'
    }
  ]
  constructor() { 
    console.log('funcionando servicio');
  }

  obtenerEquipo(){
    return this.equipo;
  }

  obtenerUno(i){
    return this.equipo[i];
  }
}
