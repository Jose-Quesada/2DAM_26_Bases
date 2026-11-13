import { Component, input, linkedSignal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-detail',
  imports: [],
  template: `
    <div class="card border-primary shadow-sm">
      <div class="card-header bg-primary text-white d-flex justify-content-between align-items-center">
        <h4 class="mb-0">Ficha de: {{ character().name }}</h4>
        <span class="badge bg-light text-primary">ID: #{{ character().id }}</span>
      </div>

      <div class="card-body">
        <p class="card-text mb-1">
          <strong>Poder Base Original:</strong>
          <span class="badge bg-secondary">{{ character().power }}</span>
        </p>

        <p class="card-text fs-5">
          <strong>Poder Actual (Con Entrenamiento):</strong>
          <span
            class="badge"
            [class.text-bg-success]="currentPower() > character().power"
            [class.text-bg-primary]="currentPower() === character().power"
          >
            {{ currentPower() }}
          </span>
        </p>

        <!-- Acciones reactivas sobre el linkedSignal -->
        <div class="d-flex gap-2 mt-3">
          <button
            type="button"
            class="btn btn-success"
            (click)="boostPower()"
          >
            ⚡ Entrenar (+100)
          </button>

          <button
            type="button"
            class="btn btn-outline-secondary"
            (click)="resetPower()"
            [disabled]="currentPower() === character().power"
          >
            ↺ Restablecer
          </button>
        </div>
      </div>
    </div>
  `,
})
export class CharacterDetail {
  // 1. Entrada requerida: el personaje seleccionado por el componente padre
  character = input.required<Character>();

  // 2. linkedSignal: nace con el poder del personaje, pero permite mutación local (.update / .set)
  // Si 'character' cambia en el padre, 'currentPower' se sincroniza automáticamente con el nuevo valor
  currentPower = linkedSignal(() => this.character().power);

  // 3. Muta el valor localmente sin alterar el array original del servicio
  boostPower(): void {
    this.currentPower.update((power) => power + 100);
  }

  // 4. Restablece el valor local al poder base de la fuente
  resetPower(): void {
    this.currentPower.set(this.character().power);
  }
}
