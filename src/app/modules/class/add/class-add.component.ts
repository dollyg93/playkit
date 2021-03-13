import { Component, OnInit } from '@angular/core';
import { CoreService } from '@app/core/service/core.service';

@Component({
    selector: 'app-class-add',
    templateUrl: 'class-add.component.html'
})

export class ClassAddComponent implements OnInit {
    fieldArray: Array<any> = [];
    newAttribute: any = {};
    constructor(private coreService: CoreService) {
        this.coreService.editClassSub$.subscribe((id) => {
            console.log(id);
        })
    }
    addFieldValue() {
        this.fieldArray.push(this.newAttribute)
        this.newAttribute = {};
    }

    deleteFieldValue(index) {
        this.fieldArray.splice(index, 1);
    }
    
    ngOnInit() { }
}