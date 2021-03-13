import { Injectable } from "@angular/core";
import { groupTabs } from "../constants/static";

@Injectable()
export class GroupService {
    private groupTab = groupTabs[0];

    setGroupTab(tab) {
        this.groupTab = tab;
    }

    getGroupTab() {
        return this.groupTab;
    }
}