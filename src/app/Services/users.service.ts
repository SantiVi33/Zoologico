import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 
 headers : HttpHeaders;
 Logueado : boolean = false;

  constructor(private http:HttpClient, private router : Router) { 
   this.headers = new HttpHeaders({
    "Accept" : "application/json",});

    console.log('Servicio Usuario Andando')
  } 
  
  AgregarU (nombre : string , apellido : string , tdocumento : string , ndocumento : string , email : string , usuario : string , clave : string, rango : string) : Observable<any>
  {
    const obj = new FormData();
    obj.append("Nombre",nombre);
    obj.append("Apellido",apellido);
    obj.append("TipDocumento",tdocumento);
    obj.append("NroDocumento",ndocumento);
    obj.append("Email",email);
    obj.append("Usuario",usuario);
    obj.append("password",clave);
    obj.append("Rango",rango);
    return this.http.post('Datos/DatosUsuarios',obj);
  }

  Login(usuario : string, clave : string): Observable <any> {
    console.log('Verificando usuario')
    return this.http.post<any>("Datos/DatosUsuarios/login",{Usuario:usuario,password:clave},{headers:this.headers})
    .pipe(map(datos=>{return datos}));
  }

  Token() {
    let Activo = localStorage.getItem("Usuario");
    if(!Activo){
      return null;
    }
    this.Logueado = true;
    let UserJson= JSON.parse(Activo);
    return UserJson['token_type'] + " " + UserJson['access_token'];
  }

  OutLogin(){
    localStorage.removeItem("Usuario");
  }

}
