import { Action } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';

import * as functions from '../entity/entity.functions';
import { RESTService } from '../../services/rest.service';
import { slices } from '../util';
import { Talk } from './talk.model';
import { RootState } from '../';
import { Filters } from '../layout/layout.model';
import { TalkBackendService } from '../../services/talk-backend.service';
import * as fromRoot from '../';

@Injectable()
export class TalkEffects {
    @Effect()
    private reactToRouteChange$: Observable<Action> = this.actions$.ofType('ROUTER_NAVIGATION')
        .combineLatest(this.store.select(state => state.router.path),
        this.store.select(state => state.talk),
        this.activatedRoute.params, ([action, path, state, params]) => {
            // do your async action in here, return a new action when done which the reducer will use to update the state
            const route = action.state.root.firstChild.firstChild;

            if (route.routeConfig.path === 'talks') {
                const filters = createFilters(route.params);
                return this.backend.findTalks(filters).map(r => ({ ...state, ...r, filters }));

            } else if (route.routeConfig.path === 'talk/:id') {
                const id = +route.params['id'];
                if (state.talks[id]) return state;
                return this.backend.findTalk(id).map(t => ({ ...state, talks: { ...state.talks, [t.id]: t } }));

            } else {
                return state;
            }

        });

    constructor(
        private store: Store<RootState>,
        private actions$: Actions,
        private dataService: RESTService,
        private activatedRoute: ActivatedRoute,
        private backend: TalkBackendService
    ) { }
}

function createFilters(p: Params): Filters {
    return { speaker: p['speaker'] || null, title: p['title'] || null, minRating: p['minRating'] ? +p['minRating'] : 0 };
}


