import { Action } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as functions from '../entity/entity.functions';
import { RESTService } from '../../services/rest.service';
import { slices } from '../util';
import { Talk } from './talk.model';
import { RootState } from '../'
@Injectable()
export class TalkEffects {
    @Effect()
    private reactToRouteChange$: Observable<Action> = this.actions$.ofType('ROUTER_NAVIGATION')
        .withLatestFrom(this.store.select(state => state.router.path))
        .switchMap(([action, path]) => {
            return
            // do your async action in here, return a new action when done which the reducer will use to update the state
        });

    constructor(
        private store: Store<RootState>,
        private actions$: Actions,
        private dataService: RESTService
    ) { }
}


