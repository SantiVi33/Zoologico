import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalesService {

  _url = 'http://localhost/api/DatosAnimales'

  constructor(private http:HttpClient) { 

      console.log('Servicio Animales Andando')


  } 

  VerAnimales() {
    let header = new HttpHeaders().set('type-content','aplication/json')

    return this.http.get(this._url,{headers:header});

  }

  AgregarA(nombre : string , tipo : string , especie : string , pais : string , zonas : string , 
  alimentacion : string , edad : string , foto : string ) : Observable<any> {

    const obj = new FormData();
    obj.append("Nombre",nombre);
    obj.append("Tipo",tipo);
    obj.append("Especie",especie);
    obj.append("PaisOrigen",pais);
    obj.append("ZonasDondeHabitan",zonas);
    obj.append("Alimentacion",alimentacion);
    obj.append("Edad",edad);
    obj.append("URLfoto",foto);
    return this.http.post(this._url,obj);


  }

  VerAnimal (i : number) { 
    let urlNew = this._url + i;
    let header = new HttpHeaders().set('type-content','aplication/json')
    return this.http.get(urlNew,{headers:header})
  }

 

  //VerTipo (string: tipo) {}

}
