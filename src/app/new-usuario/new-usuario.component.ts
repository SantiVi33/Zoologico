import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'
import { UsersService } from '../Services/users.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-new-usuario',
  templateUrl: './new-usuario.component.html',
  styleUrls: ['./new-usuario.component.css']
})
export class NewUsuarioComponent implements OnInit {

  UsuarioAgregando:boolean = false

  Nombre: FormControl = new FormControl('')
  Apellido: FormControl = new FormControl('')
  TipDocumento: FormControl = new FormControl('')
  NroDocumento: FormControl = new FormControl('')
  Email: FormControl = new FormControl('')
  Usuario: FormControl = new FormControl('')
  password: FormControl = new FormControl('')
  Rango: FormControl = new FormControl('')

  constructor(private userService : UsersService , private router : Router) { }

  AgregarUsuario() {

    console.log('Creando usuario...')

    let nombre = this.Nombre.value;
    let apellido = this.Apellido.value;
    let tdocumento = this.TipDocumento.value;
    let ndocumento = this.NroDocumento.value;
    let email = this.Email.value;
    let usuario = this.Usuario.value;
    let clave = this.password.value;
    let rango = this.Rango.value;

    this.UsuarioAgregando = true

    //return console.log(usuario);

    this.userService.AgregarU(nombre,apellido,tdocumento,ndocumento,email,usuario,clave,rango)
    .subscribe(data => {console.log(data)  
    console.log('Usuario Agregado')
    this.Nombre.setValue("");
    this.Apellido.setValue("");
    this.TipDocumento.setValue("");
    this.NroDocumento.setValue("");
    this.Email.setValue("");
    this.Usuario.setValue("");
    this.password.setValue("");
    this.Rango.setValue("");
    this.router.navigate(['localhost:4200'])
    })

   


  }


  ngOnInit(): void { 
  }

}
