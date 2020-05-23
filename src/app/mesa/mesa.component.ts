import { Component, OnInit } from '@angular/core';
import { Mesa} from './mesa';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.css']
})
export class MesaComponent implements OnInit {

  mesa : any= [
    new Mesa(1, 'roble', 'amarillo'),
    new Mesa(2, 'encino', 'verde'),
    new Mesa(3, 'pino', 'rosa'),
    new Mesa(4, 'alamo', 'rojo'),
    new Mesa(5, 'caoba', 'azul')
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
