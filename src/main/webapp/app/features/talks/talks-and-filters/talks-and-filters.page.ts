import { Component, Inject, OnInit } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { Router, Params } from "@angular/router";
import { Store } from '@ngrx/store';

import * as fromRoot from '../../../core/store';
import { Talk } from "../../../core/store/talk/talk.model";
import { Filters } from "../../../core/store/layout/layout.model";

@Component({
    selector: 'jhi-talks-page',
    templateUrl: './talks-and-filters.page.html',
    styleUrls: ['./talks-and-filters.page.css']
})
export class TalksAndFiltersPage implements OnInit {
    filters$: Observable<Filters>;
    talks$: Observable<Talk[]>;

    constructor(private router: Router, private store: Store<fromRoot.RootState>) { }

    ngOnInit() {
        this.filters$ = this.store.select(fromRoot.getTalksPageFilters);
        this.talks$ = this.store.select(fromRoot.getFilteredTalks);
    }

    handleFiltersChange(filters: Filters): void {
        this.router.navigate(["/talks", this.createParams(filters)]);
    }

    private createParams(filters: Filters): Params {
        const r: any = {};
        if (filters.speaker) r.speaker = filters.speaker;
        if (filters.title) r.title = filters.title;
        if (filters.minRating) r.minRating = filters.minRating;
        return r;
    }
}
