import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user-add',
    templateUrl: 'user-add.component.html'
})

export class UserAddComponent implements OnInit {
    loadView: number;
    constructor() {
        this.loadView = 1;
    }

    ngOnInit() { }
}