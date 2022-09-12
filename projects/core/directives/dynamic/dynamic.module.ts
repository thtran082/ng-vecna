import { NgModule } from '@angular/core';
import { VecnaCoreDynamicDirective } from './dynamic.directive';

@NgModule({
  declarations: [VecnaCoreDynamicDirective],
  exports: [VecnaCoreDynamicDirective],
})
export class VecnaCoreDynamicModule {}
