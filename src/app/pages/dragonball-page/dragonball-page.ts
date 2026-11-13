import { Component, effect, inject, signal } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list';
import { JsonPipe } from '@angular/common';
import { CharacterAdd } from '../../components/dragonball/character-add/character-add';
import { Dragonball } from '../../services/dragonball';
import { CharacterDetail } from '../../components/dragonball/character-detail/character-detail';

@Component({
  imports: [CharacterListComponent, CharacterAdd, CharacterDetail],
  selector: 'app-dragonball-page',
  styles: ``,
  templateUrl: './dragonball-page.html',
})
export class DragonballPage {
constructor(){

  }
  public dragonballService = inject(Dragonball);

  public selectedCharacter = signal<Character | null>(null);

  boostSelectedFromParent(): void {
  const current = this.selectedCharacter();
  if (!current) return;

  // Actualización inmutable: generamos una nueva referencia de objeto para que la señal detecte el cambio
  this.selectedCharacter.set({
    ...current,
    power: current.power + 500,
  });
}

}
