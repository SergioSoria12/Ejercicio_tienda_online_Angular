import { Component } from '@angular/core';
import { Producto } from '../producto/producto.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listado-productos',
  imports: [FormsModule],
  templateUrl: './listado-productos.html',
  styleUrl: './listado-productos.css'
})
export class ListadoProductos {
  productos: Producto[] = [
    new Producto('Pantalon', 130.0),
    new Producto('Camisa', 80.0),
    new Producto('Jersey', 45.0)
  ];

  descripcionInput: string = '';
  precioInput: number | null = null;

  agregarProducto(){
    if(this.descripcionInput.trim() === '' || this.precioInput == null || this.precioInput <=0){
      console.log('Debe ingresar una descripción y un precio válidos');
      return;
    }

    const producto = new Producto(this.descripcionInput, this.precioInput);
    this.productos.push(producto);

    //Limpiamos los campos del formulario
    this.descripcionInput = '';
    this.precioInput = null;
  }
}
