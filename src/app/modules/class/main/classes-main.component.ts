import { Component, OnInit } from '@angular/core';
import { CoreService } from '@app/core/service/core.service';

@Component({
    selector: 'app-classes',
    templateUrl: 'classes-main.component.html'
})

export class ClassesMainComponent implements OnInit {
    constructor(private coreService: CoreService) { }

    ngOnInit() { }

    navigateTo() {
        this.coreService.navigateToPath('/dashboard/add-class')
    }
}