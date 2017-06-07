import { Component } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';

@Component({
    selector: 'jhi-dashboard',
    styleUrls: ['./dashboard.page.scss'],
    templateUrl: './dashboard.page.html'
})
export class DashboardPage {
    // true here is for using subdirectories, you can also specify regex as third param
    // public pathToImages = require.context('../../../', true, /\.(jpe?g|png|gif|svg|woff2?|ttf|eot)$/i);

    constructor(
        private jhiLanguageService: JhiLanguageService) {
        // this.jhiLanguageService.setLocations(['all']);

    }
}
