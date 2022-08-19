import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { distinctUntilChanged, map } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.scss'],
  providers: [],
})
export class AppComponent {
readonly landing$ = this.router.events.pipe(
  map(() => this.router.routerState.snapshot.url === '/'),
  distinctUntilChanged(),
)

  constructor(private router: Router) {}
}
