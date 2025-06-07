import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

interface TodoResponse {
  id: number;
  title: string;
  completed?: boolean;
  userId?: number;
}

interface TodoInfo {
  id: number;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class ObservableService {
  private readonly _httpClient = inject(HttpClient);
  apiUrl = 'https://jsonplaceholder.typicode.com/todos/';

  simpleObs(){
    return new Observable<string>((observer) => {
      console.log('Observable started');
      observer.next('Simple Observable');
      observer.next('Simple Observable 2');
      observer.next('Simple Observable 3');
    })
  };

  intervalObs(){
    return new Observable((observer) => {
      console.log('intervalObs');

      const interval = setInterval(() => {
        console.log('setInterval');
        observer.next('intervalObs');
      }, 2000);

      return () => {
        console.log('Interval cleared');
        observer.complete();
        clearInterval(interval);
      };
    });
  }

  getTodoInfos(id: number): Observable<TodoInfo> {
    return this._httpClient.get<TodoResponse>(`${this.apiUrl}${id}`)
      .pipe(
        map((response) => {
          const newTodo = {
            id: response.id,
            title: response.title,
          }

          return newTodo;
        })
      );
  }
}
