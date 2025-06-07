import { Component, inject, OnInit } from '@angular/core';
import { ObservableService } from './observable.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-simple-observable',
  standalone: true,
  templateUrl: './simple-observable.component.html',
  styleUrls: ['./simple-observable.component.scss']
})
export class SimpleObservableComponent implements OnInit {
  subs!: Subscription;
  private readonly observableService = inject(ObservableService);

  ngOnInit() {
    // this.observableService.simpleObs().subscribe((x) => {
    //   console.log('Observable value:', x);
    // });

    // this.subs = this.observableService.intervalObs().subscribe((x) => {
    //   console.log(x);
    // });


    this.observableService.getTodoInfos(1).subscribe({
      next: (data) => {
        console.log('Todo data:', data);
      },
      error: (error) => {
        console.error('Error fetching todo:', error);
      },
      complete: () => {
        console.log('Todo fetch complete');
      }
    });
  }

  unsubscribeInterval() {
    this.subs?.unsubscribe();
  }
}
