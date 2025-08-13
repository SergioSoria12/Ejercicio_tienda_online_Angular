import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Producto } from '../producto/producto.model';

@Component({
  selector: 'app-formulario',
  imports: [],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario {
  
  @ViewChild('descripcionInput') descripcionInput!: ElementRef;
  @ViewChild('precioInput') precioInput!: ElementRef;
  @Output() nuevoProducto = new EventEmitter<Producto>();
  

  agregarProducto(evento: Event){
    //Para evitar que se refresque el formulario al hacer submit
    evento.preventDefault();

    if(this.descripcionInput.nativeElement.value.trim() === '' 
    || this.precioInput.nativeElement == null 
    || this.precioInput.nativeElement.value <=0){
      console.log('Debe ingresar una descripción y un precio válidos');
      return;
    }

    const producto = new Producto(this.descripcionInput.nativeElement.value, 
      this.precioInput.nativeElement.value);
    //Emitir evento de nuevo producto
    this.nuevoProducto.emit(producto);

    //Limpiamos los campos del formulario
    this.descripcionInput.nativeElement.value = '';
    this.precioInput.nativeElement.value = null;
  }
}
