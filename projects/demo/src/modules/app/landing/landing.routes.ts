import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { routes } from "./pages";

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class LandingRoutingModule {}