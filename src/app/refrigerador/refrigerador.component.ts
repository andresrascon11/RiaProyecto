import { Component, OnInit } from '@angular/core';
import { Refrigerador } from './refrigerador';

@Component({
  selector: 'app-refrigerador',
  templateUrl: './refrigerador.component.html',
  styleUrls: ['./refrigerador.component.css']
})
export class RefrigeradorComponent implements OnInit {

  refrigerador : any= [
    new Refrigerador(1, 'mabe', 'gris'),
    new Refrigerador(2, 'daewoo', 'gris'),
    new Refrigerador(3, 'samsung', 'gris'),
    new Refrigerador(4, 'lg', 'gris'),
    new Refrigerador(5, 'maytag', 'gris')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
