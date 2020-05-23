import { Component, OnInit } from '@angular/core';
import { Puerta } from './puerta';

@Component({
  selector: 'app-puerta',
  templateUrl: './puerta.component.html',
  styleUrls: ['./puerta.component.css']
})
export class PuertaComponent implements OnInit {


  puerta : any= [
    new Puerta(1, 'encino', 'verde'),
    new Puerta(2, 'caoba', 'rosa'),
    new Puerta(3, 'alamo', 'azul'),
    new Puerta(4, 'pino', 'amarillo'),
    new Puerta(5, 'roble', 'rojo')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
