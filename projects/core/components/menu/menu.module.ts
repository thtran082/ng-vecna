import { NgModule } from '@angular/core';
import { VecnaMenuDirective, VecnaMenuItemDirective } from '@vecna/core/directives';

const COMPONENTS = [VecnaMenuItemDirective, VecnaMenuDirective];

@NgModule({
  imports: [],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class VecnaMenuModule {}
