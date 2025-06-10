import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  // readonly valueChanged$ = new Subject<number>();
  readonly valueChanged$ = new BehaviorSubject<number>(1);

  emitValue(num: number) {
    this.valueChanged$.next(num);
  }
}
