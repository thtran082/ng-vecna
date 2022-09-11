import { InjectionToken } from '@angular/core';
import { VnDocPages } from '@vecna/addon-doc/types';

export const VECNA_DOC_PAGES = new InjectionToken<VnDocPages>(
  'VECNA_DOC_PAGES',
  {
    factory: () => [],
  }
);

export const VECNA_DOC_LOGO = new InjectionToken<any>('VECNA_DOC_LOGO', {
  factory: () => null,
});
