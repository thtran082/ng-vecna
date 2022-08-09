import { Provider } from "@angular/core";
import { VECNA_DOC_PAGES } from "@vecna/addon-doc/tokens";
import { pages } from "./pages";

export const APP_PROVIDERS: Provider[] = [
 {
  provide: VECNA_DOC_PAGES,
  useValue: pages,
 }
]