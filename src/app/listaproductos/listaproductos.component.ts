import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listaproductos',
  templateUrl: './listaproductos.component.html',
  styleUrls: ['./listaproductos.component.css']
})
export class ListaproductosComponent implements OnInit {
  @Input()productos;

  constructor() { }

  ngOnInit() {
  }

}
