import {RouterModule, Routes} from '@angular/router';

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

const routes: Routes = [
  { path: 'contacto', component: ContactoComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'Animales', component: ListaAnimalesComponent },
  { path: 'Entradas', component: CompraEntradasComponent },
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
    CompraEntradasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
