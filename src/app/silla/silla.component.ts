import { Component, OnInit } from '@angular/core';
import { Silla } from './silla';

@Component({
  selector: 'app-silla',
  templateUrl: './silla.component.html',
  styleUrls: ['./silla.component.css']
})
export class SillaComponent implements OnInit {

  silla : any= [
    new Silla(1, 'plegable', 'gris'),
    new Silla(2, 'tijera', 'negra'),
    new Silla(3, 'plegable', 'roja'),
    new Silla(4, 'oficina', 'verde'),
    new Silla(5, 'ruedas', 'azul')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
