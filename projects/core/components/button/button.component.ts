import { Component, HostBinding, Input } from '@angular/core';
import { VnAppearance, VnColor, VnShape } from "@vecna/core/types";

@Component({
  selector: 'button[vnButton], a[vnButton]',
  template: `
    <vn-wrapper
      [appearance]="appearance"
      [disabled]="disabled"
    >
    <span>
      <ng-content></ng-content>
    </span>
    </vn-wrapper>
  `,
})
export class VecnaButtonComponent {
  @Input()
  @HostBinding('attr.data-appearance')
  appearance: VnAppearance = '';

  @Input()
  @HostBinding('[disabled]')
  disabled = false;

  @Input()
  @HostBinding('attr.data-color')
  color: VnColor = 'default';

  @Input()
  @HostBinding('attr.data-appearance')
  shape: VnShape = 'square';

  constructor() {}
}