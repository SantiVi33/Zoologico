import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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


  //VerTipo (string: tipo) {}

  //VerAnimal (int: any) { urlNew = _url + i}
}
