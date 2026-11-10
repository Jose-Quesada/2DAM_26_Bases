import { UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  imports: [UpperCasePipe],
  templateUrl: './hero-page-component.html',
})
export class HeroPageComponent {
  // 1. Señales reactivas
  name = signal('Ironman');
  age = signal<number>(45);

  // 2. Método descriptivo que concatena valores reactivos
  getHeroDescription(): string {
    return `${this.name()} - ${this.age()}`;
  }

  // 3. Métodos para mutar las señales con .set()
  changeHero(): void {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  changeAge(): void {
    this.age.set(60);
  }

  resetForm(): void {
    this.name.set('Ironman');
    this.age.set(45);
  }
}
