import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroesModule } from './components/heroes/heroes.module';
import { ContadorComponent } from './components/contador/contador/contador.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContadorComponent,

  ],
  imports: [
    BrowserModule,
    HeroesModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
