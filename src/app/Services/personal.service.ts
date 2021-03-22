import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  _url = 'http://localhost/api/DatosPersonal'

  constructor(private http: HttpClient) { 

    console.log('Servicio Personal andando')

  }

  VerPersona() {
    let header = new HttpHeaders()
    .set('type-content','aplication/json')

    return this.http.get(this._url,{headers:header});

  }
}
