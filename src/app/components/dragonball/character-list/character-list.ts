import { Component, input, output } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.html',
})
export class CharacterListComponent {
  // Input obligatorio: el padre TIENE que proporcionarlo
  characters = input.required<Character[]>();
  selectCharacter = output<Character>();

  // Input opcional con valor por defecto
  listName = input<string>('Listado de Personajes');
}
