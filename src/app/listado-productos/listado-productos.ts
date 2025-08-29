import { Component } from '@angular/core';
import { Producto } from '../producto/producto.model';
import { FormsModule } from '@angular/forms';
import { Formulario } from "../formulario/formulario";
import { ProductoComponent } from "../producto/producto";
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-productos',
  imports: [FormsModule, Formulario, ProductoComponent],
  templateUrl: './listado-productos.html',
  styleUrl: './listado-productos.css'
})
export class ListadoProductos {

  productos: Producto[] = [];

  constructor(private productoServices: ProductoService,
    private router: Router
  ){
   
  }

  ngOnInit(){
    //Inicializar los productos
    this.productos = this.productoServices.productos;
  }

  agregarProducto(){
    this.router.navigate(['agregar']);
  }
}


