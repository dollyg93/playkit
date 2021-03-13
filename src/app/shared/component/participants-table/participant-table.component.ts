import { Component, Input, OnInit } from '@angular/core';
import { CoreService } from '@app/core/service/core.service';

@Component({
    selector: 'app-participant-table',
    templateUrl: 'participant-table.component.html'
})

export class ParticipantTableComponent implements OnInit {
    @Input() list: Array<any>;
    constructor(private coreService: CoreService){
    }

    ngOnInit() { }

    navigateTo(item) {
        this.coreService.navigateToPath(`/dashboard/users/${item}`);
    }
}