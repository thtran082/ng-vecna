import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button vnButton appearance="fill" [disabled]="true">Show button</button>
  `,
  styleUrls: ['./app.component.scss'],
  providers: [],
})
export class AppComponent {
  title = 'demo';

  constructor() {}
}
