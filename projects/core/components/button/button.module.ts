import { NgModule } from '@angular/core';
import { VnWrapperModule } from '@vecna/core/directives';

import { VecnaButtonComponent } from './button.component';

const COMPONENTS = [VecnaButtonComponent];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [VnWrapperModule],
})
export class VecnaButtonModule {}
