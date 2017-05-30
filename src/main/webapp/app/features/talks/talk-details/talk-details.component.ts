import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';
import 'rxjs/add/operator/mergeMap';

import { Talk } from '../../../core/store/talk/talk.model';
import * as fromRoot from '../../../core/store';

@Component({
    selector: 'jhi-talk-details',
    templateUrl: './talk-details.component.html',
    styleUrls: ['./talk-details.component.css']
})
export class TalkDetailsComponent implements OnInit {
    talk$: Observable<Talk>;
    talkSub: Subscription;
    talk: Talk;
    watched$: Observable<boolean>;

    constructor(private store: Store<fromRoot.RootState>, private route: ActivatedRoute) { }

    ngOnInit() {
        this.talk$ = this.store.select(fromRoot.getSelectedTalk);
        this.talkSub = this.talk$.subscribe((talk) => {
            this.talk = talk;
        });
        this.watched$ = this.store.select(fromRoot.getWatched);
    }

    handleRate(newRating: number): void {
        this.store.dispatch({
            type: 'RATE',
            payload: {
                talkId: this.talk.id,
                rating: newRating
            }
        });
    }

    handleWatch(): void {
        this.store.dispatch({
            type: 'WATCH',
            payload: {
                talkId: this.talk.id,
            }
        });
    }

    ngOnDestroy() {
        this.talkSub && this.talkSub.unsubscribe();
    }
}
