import { Component, OnInit } from '@angular/core';
import {StorageService} from './core/service/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
    StorageService.setItem('role', '2');
  }
}
