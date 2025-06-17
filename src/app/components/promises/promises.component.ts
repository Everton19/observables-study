import { Component, inject } from '@angular/core';
import { PromisesService } from './promises.service';

@Component({
  selector: 'app-promises',
  imports: [],
  templateUrl: './promises.component.html',
  styleUrl: './promises.component.scss'
})
export class PromisesComponent {
  private readonly promise = inject(PromisesService);

  ngOnInit(): void {
    //Testando resolved promise
    // this.promise.simplePromise().then((value) => {
    //   console.log(value);
    // });

    //Testando rejected promise
    this.promise.rejectedPromise()
        .then(() => { console.log('Resolved');})
        .catch((error) => { console.error(error);})
        .finally(() => {
          console.log('Promise completed');
        });
  }
}
