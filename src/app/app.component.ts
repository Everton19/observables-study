import { Component } from '@angular/core';
import { SimpleObservableComponent } from './components/simple-observable/simple-observable.component';
import { SubjectComponent } from './components/subject/subject.component';
import { PromisesComponent } from './components/promises/promises.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SimpleObservableComponent,
    SubjectComponent,
    PromisesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'study-observables';
}
