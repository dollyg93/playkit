import { Component, OnInit } from '@angular/core';
import { StorageService } from '@app/core/service/storage.service';
@Component({
    selector: 'app-group',
    templateUrl: './group.component.html'
})

export class GroupComponent implements OnInit {
    role: number;
    constructor() { 
        this.role = parseInt(StorageService.getItem('role'));
    }

    ngOnInit() { }
}