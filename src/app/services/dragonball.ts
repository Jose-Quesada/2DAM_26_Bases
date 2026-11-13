import { effect, Service, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

const loadFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters) : [
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
  ];
};

@Service()
export class Dragonball {
  saveToLocalStorage = effect(() => {
  localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  characters = signal<Character[]>(loadFromLocalStorage());

  addCharacter(character: Character) {
    this.characters.update((list) => [...list, character]);
  }

}

