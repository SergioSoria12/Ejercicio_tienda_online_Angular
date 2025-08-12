import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  imports: [],
  templateUrl: './producto.html',
  styleUrl: './producto.css'
})
export class Producto {
  descripcion = "Nuevo producto";
  precio = 100.00;
}
