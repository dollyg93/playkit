import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from '@app/core/service/group.service';
import {groupTabs} from '@core/constants/static';

@Component({
    selector: 'app-group-admin',
    templateUrl: './main.component.html'
})

export class AdminGroupMainComponent implements OnInit {
    listElements: Array<any>;
    tab: object;
    constructor(private groupService: GroupService, private router: Router, private _activatedRoute: ActivatedRoute) {
        this.listElements = groupTabs;
    }

    ngOnInit() {
        this.getTabState();
    }

    tabClicked(tab) {
        this.groupService.setGroupTab(tab);
        this.routeToTab(tab);
    }

    getTabState() {
        this.tab = this.groupService.getGroupTab();
        if (this.tab) {
            this.routeToTab(this.tab);
        } else {
            this.tab = groupTabs[0];
        }
    }

    routeToTab(tab) {
        this.router.navigate([tab.action], {relativeTo: this._activatedRoute});
    }
}