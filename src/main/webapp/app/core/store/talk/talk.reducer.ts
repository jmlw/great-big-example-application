import { TalkWatchService } from '../../services/talk-watch.service';
import { TalkBackendService } from '../../services/talk-backend.service';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { Store, Reducer } from '@ngrx/store';
import { RouterStateSnapshot, Params } from '@angular/router';

import * as fromRoot from '../';
import { typeFor, slices } from '../util';
import { Entities, initialEntities } from '../entity/entity.model';
import { Talk } from './talk.model';
import { Talks, initialTalks } from './talks.model';
import { Filters } from '../layout/layout.model';

export type RouterNavigation = { type: 'ROUTER_NAVIGATION', state: RouterStateSnapshot };
export type Watch = { type: 'WATCH', talkId: number };
export type Rate = { type: 'RATE', talkId: number, rating: number };
export type Unrate = { type: 'UNRATE', talkId: number, error: any };
export type Action = RouterNavigation | Watch | Rate | Unrate;

export function makeReducer(backend: TalkBackendService, watch: TalkWatchService, store: Store<fromRoot.RootState>) {
    return (state: Talks = initialTalks({}), action: Action): Talks | Observable<Talks> => {
        switch (action.type) {
            case 'ROUTER_NAVIGATION':
                const route = action.state.root.firstChild.firstChild;

                if (route.routeConfig.path === 'talks') {
                    const filters = createFilters(route.params);
                    return backend.findTalks(filters).map(r => ({ ...state, ...r, filters }));

                } else if (route.routeConfig.path === 'talk/:id') {
                    const id = +route.params['id'];
                    if (state.talks[id]) return state;
                    return backend.findTalk(id).map(t => ({ ...state, talks: { ...state.talks, [t.id]: t } }));

                } else {
                    return state;
                }

            case 'WATCH':
                const talkToWatch = state.talks[action.talkId];
                watch.watch(talkToWatch);
                const updatedWatched = { ...state.watched, [action.talkId]: true };
                return { ...state, watched: updatedWatched };

            case 'RATE':
                backend.rateTalk(action.talkId, action.rating).catch(e => {
                    store.dispatch({
                        type: 'UNRATE',
                        payload: {
                            talkId: action.talkId,
                            error: e
                        }
                    });
                    return new Subject<boolean>();
                }
                ).forEach(() => { });

                const talkToRate = state.talks[action.talkId];
                const ratedTalk = { ...talkToRate, yourRating: action.rating };
                const updatedTalks = { ...state.talks, [action.talkId]: ratedTalk };
                return { ...state, talks: updatedTalks };

            case 'UNRATE':
                const talkToUnrate = state.talks[action.talkId];
                const unratedTalk = { ...talkToUnrate, yourRating: null };
                const updatedTalksAfterUnrating = { ...state.talks, [action.talkId]: unratedTalk };
                return { ...state, talks: updatedTalksAfterUnrating };

            default:
                return state;
        }
    }
}

function createFilters(p: Params): Filters {
    return { speaker: p['speaker'] || null, title: p['title'] || null, minRating: p['minRating'] ? +p['minRating'] : 0 };
}

export const getTalks = (state: Talks) => state.talks;

export const getFilteredTalks = (state: Talks) => {
    return state.list.map(n => state.talks[n]);
}
