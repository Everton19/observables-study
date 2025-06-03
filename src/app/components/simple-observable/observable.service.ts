import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {
  simpleObs(){
    return new Observable<string>((observer) => {
      console.log('Observable started');
      observer.next('Simple Observable');
      observer.next('Simple Observable 2');
      observer.next('Simple Observable 3');
    })
  };
}
