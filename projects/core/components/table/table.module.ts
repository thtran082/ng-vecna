import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  VecnaTableHeaderTemplateDirective,
  VecnaTableRowTemplateDirective
} from '@vecna/core/directives';
import { VecnaTableComponent } from './table.component';

const COMPONENTS = [
  VecnaTableComponent,
  VecnaTableRowTemplateDirective,
  VecnaTableHeaderTemplateDirective,
];

@NgModule({
  imports: [CommonModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class VecnaTableModule {}
