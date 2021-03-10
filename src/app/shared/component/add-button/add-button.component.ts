import { Component, Input, OnInit } from '@angular/core';
import { AppConstant } from '@app/core/constants/app-constant';

@Component({
    selector: 'app-add-button',
    templateUrl: './add-button.component.html'
})

export class NameComponent implements OnInit {
    @Input() title: string;
    @Input() key: number;
    constructor() { }

    ngOnInit() { }
    navigateTo(key) {
        switch (key) {
            case AppConstant.USER:
                break;
            case AppConstant.CLASS:
                break;
            case AppConstant.SCHOOL:
                break;
            case AppConstant.REGION:
                break;
            case AppConstant.COUNTRY:
                break;
            default:
                throw new Error('not a valid key');
        }
    }
}