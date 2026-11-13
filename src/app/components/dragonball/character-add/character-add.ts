import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  imports: [],
  selector: 'app-character-add',
  styles: ``,
  templateUrl: './character-add.html',
})
export class CharacterAdd {
  name = signal('');
  power = signal(0);

  newCharacter = output<Character>();

  addCharacter() {
    // Validación defensiva local
    if (!this.name().trim() || this.power() <= 0) {
      return;
    }

    const character: Character = {
      id: Math.floor(Math.random() * 1000),
      name: this.name().trim(),
      power: this.power(),
    };

    // Emisión del evento fuertemente tipado hacia el componente contenedor
    this.newCharacter.emit(character);
    console.log(character)

    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
