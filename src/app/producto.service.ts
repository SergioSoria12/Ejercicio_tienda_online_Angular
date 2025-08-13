import { EventEmitter, Injectable } from '@angular/core';
import { Producto } from './producto/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
    productos: Producto[] = [
      new Producto('Pantalon', 130.0),
      new Producto('Camisa', 80.0),
      new Producto('Jersey', 45.0)
    ];
  
    detalleProductoEmitter = new EventEmitter<Producto>();
    
    agregarProducto(producto: Producto) {
      this.productos.push(producto);
    }
}
