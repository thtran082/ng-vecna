import { NgModule } from "@angular/core";
import { GettingStartedComponent } from "./getting-started.component";
import { GettingStartedRoutingModule } from "./getting-started.routes";

@NgModule({
  declarations: [GettingStartedComponent],
  exports: [GettingStartedComponent],
  imports : [GettingStartedRoutingModule]
})
export class GettingStartedModule {}