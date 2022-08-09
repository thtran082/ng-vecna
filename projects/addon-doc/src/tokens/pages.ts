import { InjectionToken } from '@angular/core';
import { VnDocPages } from '@vecna/addon-doc/types';

export const VECNA_DOC_PAGES = new InjectionToken<VnDocPages>(
  'VECNA_DOC_PAGES',
  {
    factory: () => [],
  }
);
