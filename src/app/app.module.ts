import {RouterModule, Routes} from '@angular/router';

import {PersonalService} from './Services/personal.service';
import {AnimalesService} from './Services/animales.service';
import {UsersService} from './Services/users.service'

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortadaComponent } from './portada/portada.component';
import { FooterComponent } from './footer/footer.component';
import { ContactoComponent } from './contacto/contacto.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ListaAnimalesComponent } from './lista-animales/lista-animales.component';
import { CompraEntradasComponent } from './compra-entradas/compra-entradas.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { NewUsuarioComponent } from './new-usuario/new-usuario.component';

const routes: Routes = [
  { path: 'contacto', component: ContactoComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'Animales', component: ListaAnimalesComponent },
  { path: 'Entradas', component: CompraEntradasComponent },
  { path: 'NewUsuario', component: NewUsuarioComponent},
  { path: '', component: PortadaComponent, pathMatch: 'full'},
  { path: '**', redirectTo: '/', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    FooterComponent,
    ContactoComponent,
    GaleriaComponent,
    CabeceraComponent,
    ListaAnimalesComponent,
    CompraEntradasComponent,
    NewUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PersonalService,
    AnimalesService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
