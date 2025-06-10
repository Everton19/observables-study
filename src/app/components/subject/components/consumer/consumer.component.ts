import { Component, inject } from '@angular/core';
import { SubjectService } from '../../subject.service';

@Component({
  selector: 'app-consumer',
  imports: [],
  templateUrl: './consumer.component.html',
  styleUrl: './consumer.component.scss'
})
export class ConsumerComponent {
  private readonly _subjectService = inject(SubjectService);
  value: number = 0;

  ngOnInit(): void {
    this._subjectService.valueChanged$.subscribe({
      next: (value) => {
        this.value = value;
      }
    })
  }

  ngOnDestroy(): void {
    this._subjectService.valueChanged$.unsubscribe();
  }
}
