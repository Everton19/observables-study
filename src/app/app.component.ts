import { Component } from '@angular/core';
import { SimpleObservableComponent } from './components/simple-observable/simple-observable.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SimpleObservableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'study-observables';
}
