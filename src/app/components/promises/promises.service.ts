import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromisesService {

  constructor() { }

  simplePromise(){
    return new Promise((resolve, reject) => {
      console.log('Promise started');
      const interval = setInterval(() => {
        console.log('Inside setInterval');
        resolve('Promise resolved');
        clearInterval(interval);
      }, 1000);
      console.log('Promise finished');
    })
  }

  rejectedPromise(){
    return new Promise((resolve, reject) => {
      console.log('Rejected Promise started');
      reject(new Error('Promise rejected'));

      console.log('Rejected Promise finished');
    })
  }
}
