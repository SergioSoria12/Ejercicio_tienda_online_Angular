import { Component, Input } from '@angular/core';
import { Producto } from './producto.model';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto',
  imports: [],
  templateUrl: './producto.html',
  styleUrl: './producto.css'
})
export class ProductoComponent {

  @Input() producto!: Producto;

  constructor(private productoServices: ProductoService){}

  emitirDetalleProducto() {
    this.productoServices.detalleProductoEmitter.emit(this.producto);
  }
}
