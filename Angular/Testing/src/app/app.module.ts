import { PersonaComponent } from './components/persona/persona.component';
import { PersonasComponent } from './components/personas/personas.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CasaComponent } from './components/casa/casa.component';

@NgModule({
  declarations: [
    AppComponent, PersonasComponent, PersonaComponent, CasaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
