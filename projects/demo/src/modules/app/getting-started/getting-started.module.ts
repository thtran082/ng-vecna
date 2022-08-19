import { NgModule } from '@angular/core';
import { VecnaTableModule } from "@vecna/core";
import { GettingStartedComponent } from './getting-started.component';
import { GettingStartedRoutingModule } from './getting-started.routes';

@NgModule({
  declarations: [GettingStartedComponent],
  exports: [GettingStartedComponent],
  imports: [GettingStartedRoutingModule, VecnaTableModule],
})
export class GettingStartedModule {}
