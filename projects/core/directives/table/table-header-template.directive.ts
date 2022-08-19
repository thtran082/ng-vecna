import { Directive, Input, TemplateRef } from '@angular/core';
import { IVecnaTableHeaderTemplateContext } from '@vecna/core/interfaces';

@Directive({
  selector: 'ng-template[vnTableHeader]',
})
export class VecnaTableHeaderTemplateDirective<T extends object> {
  @Input('vnTableHeader') headers!: T[] | '';

  static ngTemplateContextGuard<T extends object>(
    dir: VecnaTableHeaderTemplateDirective<T>,
    ctx: unknown
  ): ctx is IVecnaTableHeaderTemplateContext<T> {
    return true;
  }
}
