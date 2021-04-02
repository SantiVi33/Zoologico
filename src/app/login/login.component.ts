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
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],
      remember_me:['']
    })
  }

  ComprobarUsuario() {
    this.enviado = true;
    if(this.loginGroup.invalid){
      return;
    }
    this.userService.Login(this.loginGroup.controls.email.value,this.loginGroup.controls.password.value) 
    .subscribe(datos=> {
    //localStorage.setItem('Usuario',JSON.stringify(datos));  
    //this.router.navigate([]);
    console.log('USUARIO ENCONTRADO')
    //this.mensaje="Usuario encontrado"
    return;
    }); 
    console.log('Usuario no encontrado') }
    //this.mensaje="Usuario no encontrado" }
    


  ngOnInit() {
  }

}
