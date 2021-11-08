import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

  heroes :string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'Capitan America',
    'Black Panther',
    'Doctor Strange',
    'Capitana Marvel',
  ];

  heroeB :string = '';

  borrarHeroe():void{
    // console.log('Borrando...')
    // this.heroes.pop();
    this.heroeB = this.heroes.shift() || '' ;

  }







}
