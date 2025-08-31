import { Component } from '@angular/core';
import { Producto } from '../producto/producto.model';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../producto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario {
  llaveProducto: string | null = null;
  descripcionInput: string = '';
  precioInput: number | null = null;
   productosSubscripcion: any = null;

  constructor(private productoServices: ProductoService,
    private router: Router,
    private route: ActivatedRoute
  ){}
  
  ngOnInit(){
    // Verificamos si debemos cargar un producto ya existente
    const llave = this.route.snapshot.paramMap.get('llave');
    if(llave){
      const producto = this.productoServices.getProductoByLlave(llave);
      if(producto){
        //Si encontramos el producto lo cargamos en el form
        this.llaveProducto = llave;
        this.descripcionInput = producto.descripcion;
        this.precioInput = producto.precio;
      }
        // Si no está cargado, suscribimos a la actualización y pedimos los productos
        this.productosSubscripcion = this.productoServices.productosActualizados.subscribe((productos) => {
          const prod = productos[llave];
          if(prod){
            this.llaveProducto = llave;
            this.descripcionInput = prod.descripcion;
            this.precioInput = prod.precio;
            // Nos desuscribimos después de cargar
            if(this.productosSubscripcion){
              this.productosSubscripcion.unsubscribe();
              this.productosSubscripcion = null;
            }
          }
        });
        this.productoServices.refrescarProductos();
    }
  }

  guardarProducto(evento: Event){
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
    this.productoServices.guardarProducto(producto, this.llaveProducto);

    //Limpiamos los campos del formulario
    this.limpiarFormulario();

    //Redirigimos al inicio
    this.router.navigate(['/']);
  }

  cancelar(){
    // Redirigimos al inicio
    this.router.navigate(['/']);
  }

  eliminarProducto(){
    if(this.llaveProducto !== null){
      this.productoServices.eliminarProducto(this.llaveProducto);
      this.limpiarFormulario();
      this.router.navigate(['/']);
    }
  }

  limpiarFormulario(){
    this.llaveProducto = null;
    this.descripcionInput = '';
    this.precioInput = null;
  }
}
