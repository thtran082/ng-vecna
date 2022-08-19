import { NgModule } from '@angular/core';
import { VecnaButtonModule } from "@vecna/core";
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from "./landing.routes";

@NgModule({
  declarations: [LandingComponent],
  exports: [LandingComponent],
  imports: [VecnaButtonModule, LandingRoutingModule],
})
export class LandingModule {
  constructor() {
    console.log("loading");
  }
}
