import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class VecnaCoreDestroyService
  extends Subject<void>
  implements OnDestroy
{
  constructor() {
    super();
  }

  ngOnDestroy() {
    this.next();
    this.complete();
  }
}
