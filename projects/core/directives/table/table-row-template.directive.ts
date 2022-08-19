import { Directive, Input } from '@angular/core';
import { IVecnaTableRowTemplateContext } from '@vecna/core/interfaces';

@Directive({
  selector: 'ng-template[vnTableRow]',
})
export class VecnaTableRowTemplateDirective<T extends object> {
  @Input('vnTableRow') rows: T[] = [];

  static ngTemplateContextGuard<T extends object>(
    dir: VecnaTableRowTemplateDirective<T>,
    ctx: unknown
  ): ctx is IVecnaTableRowTemplateContext<T> {
    return true;
  }
}
