import { Provider } from '@angular/core';
import { VECNA_DOC_PAGES } from '@vecna/addon-doc/tokens';
import { VnDocPages } from '@vecna/addon-doc/types';
import { NAVIGATION_LABELS } from './navigation.token';

export const NAVIGATION_PROVIDERS: Provider[] = [
  {
    provide: NAVIGATION_LABELS,
    deps: [VECNA_DOC_PAGES],
    useFactory: navigationLabelsFactory,
  },
];

function navigationLabelsFactory(pages: VnDocPages): string[] {
  return pages.reduce((acc, curr) => {
    if (curr.section) {
      acc.push(curr.section);
    }
    return acc;
  }, [] as string[]);
}
