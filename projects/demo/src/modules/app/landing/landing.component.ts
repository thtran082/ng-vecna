import { Component } from '@angular/core';
import { UnsubscribeObs } from '@vecna/core/utils';
import { fromEvent, interval, Subscription } from 'rxjs';

// WIP: handle observables beside subscriptions
@UnsubscribeObs()
@Component({
  selector: 'app-landing',
  templateUrl: `./landing.component.html`,
  styleUrls: [`./landing.component.scss`],
})
export class LandingComponent {
  public subscription1$!: Subscription;
  public subscription2$!: Subscription;

  constructor() {}

  ngAfterViewInit() {
    this.subscription1$ = interval(1000).subscribe();
    this.subscription2$ = fromEvent<MouseEvent>(document, 'click').subscribe(
      () => {
        console.log('clicked');
      }
    );
  }
}
