import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { VECNA_DOC_LOGO } from '@vecna/addon-doc/tokens';

@Component({
  selector: 'header[vnDocHeader]',
  templateUrl: `./header.component.html`,
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VecnaAddonDocHeaderComponent {
  constructor(@Inject(VECNA_DOC_LOGO) public logo: any) {}
}
