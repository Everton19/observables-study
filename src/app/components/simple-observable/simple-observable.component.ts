import { Component, inject, OnInit } from '@angular/core';
import { ObservableService } from './observable.service';
import { Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-simple-observable',
  standalone: true,
  templateUrl: './simple-observable.component.html',
  styleUrls: ['./simple-observable.component.scss']
})
export class SimpleObservableComponent implements OnInit {
  subs!: Subscription;
  subsSwitchMap!: Subscription;

  private readonly observableService = inject(ObservableService);

  ngOnInit() {
    // this.observableService.simpleObs().subscribe((x) => {
    //   console.log('Observable value:', x);
    // });

    // this.subs = this.observableService.intervalObs().subscribe((x) => {
    //   console.log(x);
    // });

    // Map example

    // this.observableService.getTodoInfos(1).subscribe({
    //   next: (data) => {
    //     console.log('Todo data:', data);
    //   },
    //   error: (error) => {
    //     console.error('Error fetching todo:', error);
    //   },
    //   complete: () => {
    //     console.log('Todo fetch complete');
    //   }
    // });

    // SwitchMap example
    this.subsSwitchMap = this.observableService.obs1().pipe(
      switchMap((valueObs1) => {
        console.log('Value from obs1:', valueObs1);
        return this.observableService.obs2();
      })
    ).subscribe((valueObs2) => {
      console.log('Value from obs2:', valueObs2);
    });
  }

  unsubscribeInterval() {
    this.subs?.unsubscribe();
  }

  unsubscribeSwitchMap() {
    this.subsSwitchMap?.unsubscribe();
  }
}
