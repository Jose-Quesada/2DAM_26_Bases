import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { NavbarComponent } from './shared/navbar/navbar';

@Component({
  imports: [RouterOutlet, NavbarComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('01-bases-angular');
}
