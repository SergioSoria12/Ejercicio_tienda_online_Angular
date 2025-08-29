import { Component, signal } from '@angular/core';
import { ListadoProductos } from "./listado-productos/listado-productos";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [ListadoProductos, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Tienda Online';
}
