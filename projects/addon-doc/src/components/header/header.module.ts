import { NgModule } from '@angular/core';
import { VecnaCoreDynamicModule } from '@vecna/core';
import { VecnaAddonDocHeaderComponent } from './header.component';

@NgModule({
  declarations: [VecnaAddonDocHeaderComponent],
  imports: [VecnaCoreDynamicModule],
  exports: [VecnaAddonDocHeaderComponent],
})
export class VecnaAddonDocHeaderModule {}
