import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero-page-component/hero-page-component';

export const routes: Routes = [
  {
    path:'',
    component: CounterPageComponent,
  },
  {
    path:'hero',
    component: HeroPageComponent,
  },
  {
    path:'**',
    redirectTo:'',
  }
];
