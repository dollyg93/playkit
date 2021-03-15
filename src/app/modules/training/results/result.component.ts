import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'practitioner-training-results',
  templateUrl: 'result.component.html'
})
export class PractionerTrainingResult implements OnInit {
  userId: string;
  attempt: object;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      this.userId = params.id;
    });
    this.getAttemptsMade();
  }

  getAttemptsMade() {
    // fetch attempts made
    this.attempt = {
      'FIRST ATTEMPT': [1,2,3],
      'SECOND ATTEMPT': [1,2,3]
    };
  }

  ngOnInit() {}
}
