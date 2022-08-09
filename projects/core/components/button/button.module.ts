import { NgModule } from '@angular/core';
import { VnWrapperModule } from '@vecna/core/directives';
import { VecnaCoreDestroyModule } from '@vecna/core/services';

import { VecnaButtonComponent } from './button.component';

const COMPONENTS = [VecnaButtonComponent];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [VnWrapperModule, VecnaCoreDestroyModule],
})
export class VecnaButtonModule {}
