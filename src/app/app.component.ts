import { Component } from '@angular/core';
import { SimpleObservableComponent } from './components/simple-observable/simple-observable.component';
import { SubjectComponent } from './components/subject/subject.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SimpleObservableComponent,
    SubjectComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'study-observables';
}
