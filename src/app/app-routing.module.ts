import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {path:"", component: InicioComponent},//si el usuario no coloca nada renderizo el componente de Inicio
  {path:"usuario",loadChildren: () => import('./components/usuario/usuario.module').then(m => m.UsuarioModule)},//si el usuario en la ruta coloca usuario cargamos ese modulo
  {path:"**",redirectTo:"/",pathMatch:"full"}//si no coincide con ninguna ruta lo dirige al inicio y que compare toda la ruta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
