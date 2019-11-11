import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent implements OnInit {

    public tabIndex = new Array(true, false, false, false);

    constructor() {}

    ngOnInit() {}

    tabIndexClick(index: number) {
        for (let i = 0; i <= this.tabIndex.length - 1; i++) {
            if (index === i) { this.tabIndex[i] = true; } else { this.tabIndex[i] = false; }
          }}
}
