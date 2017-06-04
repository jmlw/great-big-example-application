import { Component } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';

@Component({
    selector: 'dashboard',
    styleUrls: ['./dashboard.page.scss'],
    templateUrl: './dashboard.page.html'
})
export class DashboardPage {
    constructor(
        private jhiLanguageService: JhiLanguageService) {
        // this.jhiLanguageService.setLocations(['all']);
    }
}
