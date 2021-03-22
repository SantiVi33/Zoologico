import { Component, OnInit } from '@angular/core';
import { PersonalService } from '../Services/personal.service' 

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent { //implements OnInit {

  public Personal: Array<any> = []

  constructor(private personaService:PersonalService) { 

    this.personaService.VerPersona().subscribe((resp:any )=>{

      this.Personal = resp

      console.log('CARGANDO DATOS')
  
    })

  }
  

}
  