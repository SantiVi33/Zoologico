import { Component, OnInit } from '@angular/core';
import {AnimalesService} from '../animales.service';

@Component({
  selector: 'app-lista-animales',
  templateUrl: './lista-animales.component.html',
  styleUrls: ['./lista-animales.component.css']
})
export class ListaAnimalesComponent implements OnInit {

  AgregarAnimal:boolean = false;

  public Animal: Array<any> = []

  constructor(private animalService:AnimalesService) { 

    this.animalService.VerAnimales().subscribe((resp:any )=>{

      this.Animal = resp

      console.log('DATOS ANIMALES CARGADOS')
    })
  } 



  ngOnInit(): void {
  }

}
