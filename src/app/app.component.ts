import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SimpleObservableComponent } from './components/simple-observable/simple-observable.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SimpleObservableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'study-observables';
}
