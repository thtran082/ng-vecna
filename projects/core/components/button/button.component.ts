import { Component, HostBinding, Input } from '@angular/core';
import { VnAppearance, VnColor, VnShape } from '@vecna/core/types';

@Component({
  selector: 'button[vnButton], a[vnButton]',
  templateUrl: `./button.component.html`,
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
  color: VnColor = 'primary';

  @Input()
  @HostBinding('attr.data-appearance')
  shape: VnShape = 'square';

  constructor() {}
}
