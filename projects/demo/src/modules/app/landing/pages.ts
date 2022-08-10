import { Routes } from "@angular/router";
import { LandingComponent } from "./landing.component";

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent,
  }
];