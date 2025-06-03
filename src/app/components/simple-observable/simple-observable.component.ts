import { Component, inject, OnInit } from '@angular/core';
import { ObservableService } from './observable.service';

@Component({
  selector: 'app-simple-observable',
  standalone: true,
  templateUrl: './simple-observable.component.html',
  styleUrls: ['./simple-observable.component.scss']
})
export class SimpleObservableComponent implements OnInit {
  private readonly observableService = inject(ObservableService);

  ngOnInit() {
    this.observableService.simpleObs().subscribe((x) => {
      console.log('Observable value:', x);
    });
  }

}
