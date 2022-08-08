import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  NgZone
} from '@angular/core';
import { VnAppearance, VnColor } from '@vecna/core/types';
import { fromEvent } from 'rxjs';

@Directive({
  selector: 'vn-wrapper, [vnWrapper]',
  host: {
    '(click)': 'onClick($event)',
  },
})
export class VnWrapperDirective {
  @Input()
  @HostBinding('attr.data-appearance')
  appearance: VnAppearance = '';

  @Input()
  disabled = false;

  @Input()
  color: VnColor = 'primary';

  onClick(event: MouseEvent): void {
    console.log('onClick');
  }

  constructor(private _ngZone: NgZone, private _elementRef: ElementRef) {
    this._ngZone.runOutsideAngular(() => {
      fromEvent<MouseEvent>(this._elementRef.nativeElement, 'click', {
        capture: true,
      }).subscribe((event) => {
        if (this.disabled) {
          event.preventDefault();
          event.stopImmediatePropagation();
        }
      });
    });
  }
}
