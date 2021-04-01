import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 
 headers : HttpHeaders;

  constructor(private http:HttpClient) { 
   this.headers = new HttpHeaders({
    "Accept" : "application/json",});

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
    return this.http.post(environment.endpoint + '/DatosUsuarios',obj);
  }

  Login(correo : string, clave : string): Observable <any> {
    return this.http.post<any>("Datos/DatosUsuarios/login",{email:correo,password:clave},{headers:this.headers})
    .pipe(map(datos=>{return datos}));
  }

}
