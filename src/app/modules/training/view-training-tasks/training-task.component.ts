import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-training-tasks',
  templateUrl: 'training-task.component.html'
})
export class TrainingTaskViewComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  createTask() {
    this.router.navigate(['add'], {
      relativeTo: this.route
    });
  }
}
