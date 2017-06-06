import { Component, OnInit } from '@angular/core';

import { FeedService } from './feed.service';
// true here is for use subdirectories, you can also specify regex as third param

@Component({
    selector: 'jhi-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.scss',
        // '../../../../../../../node_modules/roboto-fontface/css/roboto/sass/roboto-fontface.scss',
        '../../../../../../../node_modules/normalize.css/normalize.css',
        // '../../../../../../../node_modules/font-awesome/scss/font-awesome.scss',
        // '../../../../../../../node_modules/ionicons/scss/ionicons.scss',
        // '../../../../../../../node_modules/bootstrap/scss/bootstrap.scss',
        // '../../../../../../../node_modules/leaflet/dist/leaflet.css',
        // '../../../../../../../node_modules/chartist/dist/chartist.css',
        // '../../../../../../../node_modules/fullcalendar/dist/fullcalendar.css',
        // '../../../../../../../node_modules/handsontable/dist/handsontable.full.css',
        // '../../../../../../../node_modules/ng2-slim-loading-bar/style.css',
        // '../../../../app/theme/theme.scss'
    ]
})
export class Feed implements OnInit {
    public pathToImages = require.context('../../../../', true, /\.(jpe?g|png|gif|svg|woff2?|ttf|eot)$/i);

    public feed: Array<Object>;

    constructor(private _feedService: FeedService) {
    }

    ngOnInit() {
        this._loadFeed();
    }

    expandMessage(message) {
        message.expanded = !message.expanded;
    }

    private _loadFeed() {
        this.feed = this._feedService.getData();
    }
}
