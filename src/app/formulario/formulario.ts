import { Component } from '@angular/core';
import { Producto } from '../producto/producto.model';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario {

  descripcionInput: string = '';
  precioInput: number | null = null;

  constructor(private productoServices: ProductoService){}
  

  agregarProducto(evento: Event){
    //Para evitar que se refresque el formulario al hacer submit
    evento.preventDefault();

    if(this.descripcionInput.trim() === '' 
    || this.precioInput == null 
    || this.precioInput <=0){
      console.log('Debe ingresar una descripción y un precio válidos');
      return;
    }

    const producto = new Producto(this.descripcionInput, 
      this.precioInput);
    //Agregamos el producto usando el servicio
    this.productoServices.agregarProducto(producto);

    //Limpiamos los campos del formulario
    this.descripcionInput = '';
    this.precioInput = null;
  }
}
