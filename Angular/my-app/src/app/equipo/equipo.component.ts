import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EquipoService } from '../equipo.service';
@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  equipo:any[];

  constructor(private ruta: ActivatedRoute, _equipo: EquipoService) {
    this.ruta.params.subscribe(params => {
      console.log(params['id']);
      this.equipo = _equipo.obtenerUno(params['id']);
    })

  }

  ngOnInit() {
  }

}
