import { Directive, Input } from "@angular/core";
import { VnMenuMode } from "@vecna/core";

@Directive({
  selector: "[vn-menu]",
  exportAs: "vnMenu",
  host: {
    '[class.vn-menu]': 'true',
    '[class.vn-menu-vertical]': 'vnMode === "vertical"',
    '[class.vn-menu-horizontal]': 'vnMode === "horizontal"',
  }
})
export class VecnaMenuDirective {
  @Input() vnMode: VnMenuMode = 'horizontal';
}
