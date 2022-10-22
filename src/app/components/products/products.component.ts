import { Component, OnInit } from '@angular/core';
import { Screws } from 'src/app/shared/interfaces/screws';

const dataList: Screws[] = [
  { nombre: 'Juan', precio: 'Hydrogen', formato: '1.0079', marca: 'H' },
  { nombre: 'Pablo', precio: 'Helium', formato: '4.0026', marca: 'He' },
  { nombre: 'Luis', precio: 'Lithium', formato: '6.941', marca: 'Li' },
  { nombre: 'Andres', precio: 'Beryllium', formato: '9.0122', marca: 'Be' },
  { nombre: 'Sandra', precio: 'Boron', formato: '10.811', marca: 'B' },
  { nombre: 'Jose', precio: 'Carbon', formato: '12.0107', marca: 'C' },
  { nombre: 'Jaime', precio: 'Nitrogen', formato: '14.0067', marca: 'N' },
  { nombre: 'Roberto', precio: 'Oxygen', formato: '15.9994', marca: 'O' },
  { nombre: 'Jhon', precio: 'Fluorine', formato: '18.9984', marca: 'F' },
  { nombre: 'Sara', precio: 'Neon', formato: '20.1797', marca: 'Ne' },
];

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = [
    'nombre',
    'precio',
    'formato',
    'marca',
    'acciones',
  ];
  dataSource = dataList;
  constructor() {}

  ngOnInit(): void {}
}
