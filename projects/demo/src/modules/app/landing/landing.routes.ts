import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingComponent } from "./landing.component";

const subRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent,
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(subRoutes)],
})
export class LandingRoutingModule {}