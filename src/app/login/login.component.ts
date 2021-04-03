import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { UsersService } from '../Services/users.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginGroup: FormGroup;
  mensaje: string ='';
  enviado = false;

  constructor(private userService:UsersService , private router : Router , private formbuilder: FormBuilder ) {
    this.loginGroup=this.formbuilder.group({
      Usuario:['',[Validators.required,]],
      password:['',[Validators.required]],
      remember_me:['']
    })
  }

  ComprobarUsuario() {
    this.enviado = true;
    if(this.loginGroup.invalid){
      console.log('Datos invalidos')
      return;
    }
    console.log('Resultado de la busqueda:')
    this.userService.Login(this.loginGroup.controls.Usuario.value,this.loginGroup.controls.password.value) 
    .subscribe(datos=> {
    localStorage.setItem('Usuario',JSON.stringify(datos));  
    this.router.navigate(['localhost:4200']);
    }); 
    this.mensaje="Usuario no encontrado" }
    


  ngOnInit() {
  }

}
