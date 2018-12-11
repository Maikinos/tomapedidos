import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { Page404Component } from './components/page404/page404.component';
import { CamposClienteComponent } from './components/campos-cliente/campos-cliente.component';
import { BorradorComponent } from './components/borrador/borrador.component';
import { DetallesClienteComponent } from './components/detalles-cliente/detalles-cliente.component';
import { ProductosComponent } from './components/productos/productos.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';
import { ConfirmacionPedidoComponent } from './components/confirmacion-pedido/confirmacion-pedido.component';
import { PedidosEnviadosComponent } from './components/pedidos-enviados/pedidos-enviados.component';

const routes: Routes = [

  { path: '', component: HomeComponent },

  //CLIENTES
  { path: 'clientes', component: ClienteComponent }, //Solo usuarios Logueados
  { path: 'detalles-cliente/:id', component: DetallesClienteComponent}, //Solo usuarios Logueados
  
  //PEDIDOS
  { path: 'detalles-pedido/:id', component: CamposClienteComponent}, //Solo usuarios Logueados
  { path: 'confirmacion-pedido/:id', component: ConfirmacionPedidoComponent }, //Solo usuarios Logueados
  
  //BORRADORES
  { path: 'borradores', component: BorradorComponent }, //Solo usuarios Logueados

  //ACCESOS LOGIN
  { path: 'user/login', component: LoginComponent },
  { path: 'user/register', component: RegisterComponent },
  { path: 'user/profile', component: ProfileComponent }, //Solo usuarios Logueados
  
  //PRODUCTOS
  { path: 'productos', component: ProductosComponent }, //Solo usuarios Logueados
  { path: 'editar-producto/:id', component: EditarProductoComponent }, //Solo usuarios Logueados
  
  /*****************************************************/
  
  //PEDIDOS ENVIADOS
  { path: 'pedidos-enviados', component: PedidosEnviadosComponent},

  //ERROR 404
  { path: '**', component: Page404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
