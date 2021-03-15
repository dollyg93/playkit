import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'training-task-attempt',
  templateUrl: 'attemp.component.html'
})
export class TrainingAttemptComponent implements OnInit {
  @Input() list: Array<any>;
  constructor() {
  }

  ngOnInit() {}
}
