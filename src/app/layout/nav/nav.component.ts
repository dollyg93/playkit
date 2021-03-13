import { Component, Input, OnInit } from '@angular/core';
import { StorageService } from '@app/core/service/storage.service';
import { ThemeService } from '@core/service/theme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isIndexPage: boolean;
  navItems = [
    { link: '/dashboard/about', title: 'ABOUT' },
    { link: '/dashboard/training', title: 'TRAINING' },
    { link: '/dashboard/play-it', title: 'PLAY IT' },
    { link: '/dashboard/assess', title: 'ASSESS'},
    { link: '/dashboard/groups', title: 'GROUPS' }
  ];

  langItems = ["English", "Español"];

  constructor(private router: Router, private themeService: ThemeService) {
    this.isIndexPage = StorageService.getItem('token') !== null ? false : true;
  }

  ngOnInit() {
  }

  logout(): void {
    StorageService.removeItem('token');
    this.router.navigate(['/auth/login']);
  }

  selectLang(event): void {
    console.log(event.target.value);
  }

  toggleTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }
}
