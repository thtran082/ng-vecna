import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VecnaAddonDocHeaderModule } from '../header/header.module';
import { VecnaAddonDocNavigatioNModule } from '../navigation/navigation.module';
import { VecnaAddonDocMainComponent } from './main.component';

@NgModule({
  declarations: [VecnaAddonDocMainComponent],
  exports: [VecnaAddonDocMainComponent],
  imports: [
    RouterModule,
    CommonModule,
    VecnaAddonDocNavigatioNModule,
    VecnaAddonDocHeaderModule,
  ],
})
export class VecnaAddonDocMainModule {}
