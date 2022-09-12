import {
  AfterViewInit,
  Directive,
  Inject,
  Injector,
  Input,
  Type,
  ViewContainerRef,
} from '@angular/core';
import { VECNA_DOC_LOGO } from '@vecna/addon-doc/tokens';
import { VECNA_DYNAMIC_DIRECTIVE_DATA } from '@vecna/core/tokens';

@Directive({
  selector: 'ng-template[vnDynamic]',
  exportAs: 'vnDynamic',
})
export class VecnaCoreDynamicDirective<TData> implements AfterViewInit {
  @Input('vnDynamic') content!: Type<TData>;
  @Input('vnDynamicContext') context?: TData;

  constructor(private _viewContainerRef: ViewContainerRef) {}

  ngAfterViewInit(): void {
    this._createComponent();
  }

  private _createComponent(): void {
    this._viewContainerRef.clear();

    const injector = Injector.create({
      providers: [
        {
          provide: VECNA_DYNAMIC_DIRECTIVE_DATA,
          useValue: this.context,
        },
      ],
    });
    const componentRef = this._viewContainerRef.createComponent(this.content, {
      injector,
    });
    componentRef.hostView.markForCheck();
  }
}
