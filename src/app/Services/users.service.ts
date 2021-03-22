import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  _url = 'http://localhost/api/DatosUsuarios'

  constructor(private http:HttpClient) { 

    console.log('Servicio Usuario Andando')
} 


  AgregarU (nombre : string , apellido : string , tdocumento : string , ndocumento : string , email : string,
            usuario : string , clave : string) : Observable<any>
  {
    const obj = new FormData();
    obj.append("Nombre",nombre);
    obj.append("Apellido",apellido);
    obj.append("TipDocumento",tdocumento);
    obj.append("NroDocumento",ndocumento);
    obj.append("Email",email);
    obj.append("Usuario",usuario);
    obj.append("password",clave);
    return this.http.post(this._url,obj);

  }
}
