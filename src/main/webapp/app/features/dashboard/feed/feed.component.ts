import { Component, OnInit } from '@angular/core';

import { FeedService } from './feed.service';
// true here is for use subdirectories, you can also specify regex as third param

@Component({
    selector: 'jhi-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.scss']
})
export class Feed implements OnInit {
    public pathToImages = require.context('../../../../', false);

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
