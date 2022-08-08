import { Component } from "@angular/core";

@Component({
  selector: 'vn-doc-main',
  template: `
    <div class="vn-doc-main">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./main.component.scss'],
})
export class VecnaAddonDocMainComponent {
  constructor() {}
}