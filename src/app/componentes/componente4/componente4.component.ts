import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  nombre: string;
  codigo: number;
  descripcion: string;
  precio: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {codigo: 1, nombre: 'envio Local', descripcion: "este depende de la zona", precio: 1000 },
  {codigo: 2, nombre: 'envio Internacional', descripcion: "envio a todos los paises", precio:20000 },
  {codigo: 3, nombre: 'enviamos paquetes', descripcion: "nos das toda la informacion del paquete,donde va", precio: 6000},
  {codigo: 4, nombre: 'envios Grandes', descripcion: "Peso Maximo 100kilos", precio: 100000},
  {codigo: 5, nombre: 'envios Pequeños', descripcion: "Peso Maximo 40 Kilos", precio: 50000},
  /*{position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},*/
];

@Component({
  selector: 'app-componente4',
  templateUrl: './componente4.component.html',
  styleUrls: ['./componente4.component.css']
})
export class Componente4Component implements OnInit {
  displayedColumns: string[] = ['codigo', 'nombre', 'descripcion', 'precio'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
