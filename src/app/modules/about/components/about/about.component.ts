import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  isPractioner = false;
  btnClass = 'disable-btn';
  constructor() {
    this.btnClass = this.isPractioner ? 'disable-btn' : 'main-btn'
  }
  ngOnInit(): void {
  }
}
