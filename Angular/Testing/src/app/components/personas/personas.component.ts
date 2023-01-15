import { Component } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']

})
export class PersonasComponent{
  agregarPersona: boolean = false;
  agregarPersonaStatus: string = "No se ha agregado ninguna persona";

  constructor(){
    setTimeout(()=>{
      this.agregarPersona =true;
    },3000);
  }

  onCrearpersona(){
    this.agregarPersonaStatus = "Persona agregada";
  }
}
