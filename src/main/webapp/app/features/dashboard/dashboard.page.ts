import { Component } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';

@Component({
    selector: 'jhi-dashboard',
    styleUrls: ['./dashboard.page.scss'],
    templateUrl: './dashboard.page.html'
})
export class DashboardPage {
    constructor(
        private jhiLanguageService: JhiLanguageService) {
        // this.jhiLanguageService.setLocations(['all']);
    }
}
