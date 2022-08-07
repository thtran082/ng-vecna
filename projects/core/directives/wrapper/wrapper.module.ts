import { NgModule } from "@angular/core";
import { VnWrapperDirective } from './wrapper.directive';

@NgModule({
  declarations: [VnWrapperDirective],
  exports: [VnWrapperDirective],
})
export class VnWrapperModule {}