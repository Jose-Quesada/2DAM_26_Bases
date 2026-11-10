import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styles: `
    button {
      padding: 5px;
      margin: 5px 10px;
      width: 75px;
    }
  `,
})
export class CounterPageComponent {
  counter = 10;
  counterSignal = signal(10); // Inicialización de la señal

  increaseBy(value: number) {
    // Mutación tradicional
    this.counter += value;

    // Modificación de la señal usando .update()
    // Calcula el nuevo valor a partir del estado actual (función pura e inmutable)
    this.counterSignal.update((current) => current + value);
  }

  resetCounter() {
    this.counter = 0;
    // Asignación directa y reemplazo usando .set()
    this.counterSignal.set(0);
  }
}
