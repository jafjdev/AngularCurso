import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show:boolean = true;
  animales:Array<any> = [
    {tipo:'perro',nombre:'Lisa',edad:10},
    {tipo:'gato',nombre:'Pepon',edad:2},
    {tipo:'pato',nombre:'tantan',edad:7}
  ]
}
