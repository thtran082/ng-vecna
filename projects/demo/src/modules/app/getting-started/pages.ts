import { Routes } from '@angular/router';
import { GettingStartedComponent } from "./getting-started.component";

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: GettingStartedComponent
  }
];
