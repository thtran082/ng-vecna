import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button vnButton appearance="fill" [disabled]="true">Show button</button>
    <vn-doc-main>
    <vn-doc-main>
  `,
  styleUrls: ['./app.component.scss'],
  providers: [],
})
export class AppComponent {
  constructor() {}
}
