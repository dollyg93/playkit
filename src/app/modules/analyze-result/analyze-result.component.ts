import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-analyze-result',
  templateUrl: './analyze-result.component.html'
})
export class AnalyzeResultComponent implements OnInit {
    url: string = "Radar Chart.html";
    urlSafe: any;
    constructor(public sanitizer: DomSanitizer) { }

    ngOnInit() {
      this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    }
}
