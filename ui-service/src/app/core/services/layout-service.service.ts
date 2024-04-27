import {Injectable} from '@angular/core';
import {debounceTime, delay, shareReplay, Subject} from "rxjs";

@Injectable()
export class LayoutService {
  protected layoutSize$ = new Subject<void>();
  protected layoutSizeChange$ = this.layoutSize$.pipe(shareReplay({refCount: true}));

  changeLayoutSize() {
    this.layoutSize$.next();
  }

  onChangeLayoutSize() {
    return this.layoutSizeChange$.pipe(delay(1));
  }

  onSafeChangeLayoutSize() {
    return this.layoutSizeChange$.pipe(debounceTime(350))
  }
}

