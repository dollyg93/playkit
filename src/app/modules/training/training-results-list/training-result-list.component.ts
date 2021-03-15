import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'training-result-list',
  templateUrl: 'training-result-list.component.html'
})
export class TrainingResultList implements OnInit {
  @Input() list: Array<any>;
  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {}

  navigateTo(participant) {
    this.router.navigate([`results/${participant}`], {
      relativeTo: this.route
    });
  }
}
