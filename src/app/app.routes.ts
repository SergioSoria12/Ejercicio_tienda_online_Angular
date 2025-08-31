import { Routes } from '@angular/router';
import { ListadoProductos } from './listado-productos/listado-productos';
import { Formulario } from './formulario/formulario';
import { Error } from './error/error';
import { Login } from './login/login';
import { LoginGuardianService } from './login-guardian.service';

export const routes: Routes = [
    {path:'', component: ListadoProductos, canActivate:[LoginGuardianService]},
    {path:'listado', component: ListadoProductos, canActivate:[LoginGuardianService]},
    {path:'agregar', component: Formulario, canActivate:[LoginGuardianService]},
    {path:'editar/:llave', component: Formulario, canActivate:[LoginGuardianService]},
    {path:'login', component: Login},
    //Ruta comodin para ruta no registrada
    {path: '**', component: Error}
];
