import { Component} from '@angular/core';
import { ListadoProductos } from "./listado-productos/listado-productos";
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginService } from './login.service';



@Component({
  selector: 'app-root',
  imports: [ListadoProductos, RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  title = 'Tienda Online';

  constructor(private loginService: LoginService){}

  isAutenticado() {
    return this.loginService.isAutenticado();
  }

  salir(){
    this.loginService.logout();
  }
}
