import { Directive, ElementRef, Input, NgZone } from "@angular/core";
import { InputBoolean } from "@vecna/core/utils";
import { fromEvent, map } from "rxjs";
import { BooleanInput, coerceBooleanProperty } from "@angular/cdk/coercion";

@Directive({
  selector: "[vn-menu-item]",
  exportAs: "vnMenuItem",
  host: {
    "[class.vn-menu-item]": `true`,
    "[class.vn-menu-item-disabled]": `vnDisabled`,
    "[class.vn-menu-item-selected]": `vnSelected`,
    "(click)": `onClick()`,
  }
})
export class VecnaMenuItemDirective {
  @Input() @InputBoolean() vnDisabled: BooleanInput = false;

  @Input() @InputBoolean() vnSelected = false;

  constructor(private ngZone: NgZone, private el: ElementRef) {
  }

  ngOnInit(): void {
    fromEvent<MouseEvent>(this.el.nativeElement, "click", { capture: true }).pipe(
      map((e) => {
        if (this.vnDisabled) {
          e.preventDefault();
          e.stopImmediatePropagation();
        }
      })
    ).subscribe();
  }

  onClick(): void {
    // this.vnSelected = value;
  }
}
