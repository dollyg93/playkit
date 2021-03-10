import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about-edit',
    templateUrl: './about-edit.component.html'
})

export class AboutEditComponent implements OnInit {
    langItems = [
        "english",
        "Espanol"
    ];
    constructor() { }

    ngOnInit() { }
    onLangChange(event): void {
        console.log(event.target.value);
    }
}