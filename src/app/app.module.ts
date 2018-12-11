import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { Page404Component } from './components/page404/page404.component';
import { BusquedaClienteComponent } from './components/busqueda-cliente/busqueda-cliente.component';

import { HttpClientModule } from '@angular/common/http';

import { BorradorComponent } from './components/borrador/borrador.component';
import { CamposClienteComponent } from './components/campos-cliente/campos-cliente.component';
import { DetallesClienteComponent } from './components/detalles-cliente/detalles-cliente.component';
import { ProductosComponent } from './components/productos/productos.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';
import { DetallesPedidoComponent } from './components/detalles-pedido/detalles-pedido.component';
import { ConfirmacionPedidoComponent } from './components/confirmacion-pedido/confirmacion-pedido.component';

//SERVICES
import { DataApiService } from './services/data-api.service';
import { PedidosEnviadosComponent } from './components/pedidos-enviados/pedidos-enviados.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ClienteComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    Page404Component,
    BusquedaClienteComponent,
    BorradorComponent,
    CamposClienteComponent,
    DetallesClienteComponent,
    ProductosComponent,
    EditarProductoComponent,
    DetallesPedidoComponent,
    ConfirmacionPedidoComponent,
    PedidosEnviadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
