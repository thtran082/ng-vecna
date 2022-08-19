import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import {
  VecnaTableHeaderTemplateDirective,
  VecnaTableRowTemplateDirective
} from '@vecna/core/directives';
import { VecnaCoreDestroyService } from '@vecna/core/services';

@Component({
  selector: 'vn-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [VecnaCoreDestroyService],
})
export class VecnaTableComponent<T extends object> {
  @Input() data: T[] = [];

  @ContentChild(VecnaTableHeaderTemplateDirective, {
    read: TemplateRef,
    static: true,
  })
  headers?: TemplateRef<T>;

  @ContentChild(VecnaTableRowTemplateDirective, {
    read: TemplateRef,
    static: true,
  })
  rows?: TemplateRef<T>;
}
