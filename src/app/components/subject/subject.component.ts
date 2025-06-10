import { Component, inject } from '@angular/core';
import { ConsumerComponent } from './components/consumer/consumer.component';
import { SubjectService } from './subject.service';

@Component({
  selector: 'app-subject',
  imports: [ConsumerComponent],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss'
})
export class SubjectComponent {
  private readonly _subjectService = inject(SubjectService);
  showConsumer: boolean = false;

  sendObs(value: number) {
    this._subjectService.emitValue(value);
  }
}
