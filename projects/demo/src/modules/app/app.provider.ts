import { Provider } from '@angular/core';
import { VECNA_DOC_LOGO, VECNA_DOC_PAGES } from '@vecna/addon-doc/tokens';
import { LogoComponent } from './logo/logo.component';
import { pages } from './pages';

export const APP_PROVIDERS: Provider[] = [
  {
    provide: VECNA_DOC_PAGES,
    useValue: pages,
  },
  {
    provide: VECNA_DOC_LOGO,
    useValue: LogoComponent,
  },
];
