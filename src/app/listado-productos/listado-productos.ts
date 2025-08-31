import { Component } from '@angular/core';
import { Producto } from '../producto/producto.model';
import { FormsModule } from '@angular/forms';
import { ProductoComponent } from "../producto/producto";
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';
import {Subscription } from 'rxjs';

@Component({
  selector: 'app-listado-productos',
  imports: [FormsModule, ProductoComponent],
  templateUrl: './listado-productos.html',
  styleUrl: './listado-productos.css'
})
export class ListadoProductos {

  productos: {[llave:string]: Producto} = {};

  productosSubscripcion: Subscription | null = null;

  constructor(private productoServices: ProductoService,
    private router: Router
  ){
   
  }

  ngOnInit(){
   this.cargarProductos();

   //Escuchamos los cambios en la lista de productos
   this.productosSubscripcion = this.productoServices.productosActualizados.subscribe((productos) => {
    this.productos = productos;
    this.productoServices.setProductos(productos);
   });
  }

  cargarProductos(){
    this.productoServices.listarProductos().subscribe((productos: {[llave:string]: Producto}) => {
      this.productos = productos;
    });
  }

  obtenerLlaves(): string[]{
    if(this.productos){
      return Object.keys(this.productos);
    }
    return [];
  }

  agregarProducto(){
    this.router.navigate(['agregar']);
  }

  ngOnDestroy(): void {
    if(this.productosSubscripcion != null){
      this.productosSubscripcion.unsubscribe();
    }
  }
}


