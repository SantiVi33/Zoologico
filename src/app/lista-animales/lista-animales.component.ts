import { Component, OnInit } from '@angular/core';
import { AnimalesService } from '../Services/animales.service';
import { FormControl } from '@angular/forms'
import { NumberFormatStyle } from '@angular/common';
import { Router } from '@angular/router'


@Component({
  selector: 'app-lista-animales',
  templateUrl: './lista-animales.component.html',
  styleUrls: ['./lista-animales.component.css']
})
export class ListaAnimalesComponent implements OnInit {

  AgregarAnimal:boolean = false;
  Carga:boolean = true;


  Nombre: FormControl = new FormControl('')
  Tipo: FormControl = new FormControl('')
  Especie: FormControl = new FormControl('')
  PaisOrigen: FormControl = new FormControl('')
  ZonasDondeHabitan: FormControl = new FormControl('')
  Alimentacion: FormControl = new FormControl('')
  Edad: FormControl = new FormControl('')
  URLfoto: FormControl = new FormControl('')

  public Animal : Array<any> = []
  public unAnimal: any;
  

  constructor(private animalService:AnimalesService , private router : Router) { 

}

  LeerAnimales() {
    this.animalService.VerAnimales().subscribe((resp:any )=>{

    
      this.Animal = resp

      console.log('DATOS ANIMALES CARGADOS')

      this.Carga=false

    })
  } 

  AgregarA() : void {

      let nombre = this.Nombre.value;
      let tipo = this.Tipo.value;
      let especie = this.Especie.value;
      let pais = this.PaisOrigen.value;
      let zonas = this.ZonasDondeHabitan.value;
      let alimentacion = this.Alimentacion.value;
      let edad = this.Edad.value;
      let url = this.URLfoto.value;

       window.location.reload();

      this.animalService.AgregarA(nombre,tipo,especie,pais,zonas,alimentacion,edad,url)
          .subscribe(data => {console.log(data)  
        this.Nombre.setValue("");
        this.Tipo.setValue("");
        this.Especie.setValue("");
        this.PaisOrigen.setValue("");
        this.ZonasDondeHabitan.setValue("");
        this.Alimentacion.setValue("");
        this.Edad.setValue("");
        this.URLfoto.setValue("");
          })

  


  }

  VerAnimal(id : number) {
      
      this.unAnimal = this.Animal[id];

  }


  EliminarAnimal(id : string):void {
    if (confirm('Seguro que quiere eliminar este animal?')) {
      this.animalService.eliminarAnimal(id).subscribe(res => {
       window.location.reload();
       console.log(res)
    })
  }

  }


  ngOnInit(): void {
    this.LeerAnimales();
  }


}
