import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
/**
 * created for list training task 
 */
@Component({
  selector: 'training-task-list',
  templateUrl: 'training-task-list.component.html'
})
export class TrainingTaskList implements OnInit {
  @Input() list: Array<any>;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  getTrainingTask(id) {
    this.router.navigate([id], {relativeTo: this.route});
  }
}
