import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Store } from '@ngrx/store';

import { TalksPage } from './talks.page';
import { TalksAndFiltersPage } from "./talks-and-filters/talks-and-filters.page";
import { TalkDetailsComponent } from "./talk-details/talk-details.component";
import { UserRouteAccessService } from '../../shared';
import { StoreAndRouterConnectorGuard } from '../../core/store/store-and-router-connector.guard';

const routes: Routes =
    [
        {
            path: '',
            // canActivateChild: [StoreAndRouterConnectorGuard],
            children: [
                // {
                //     path: '', pathMatch: 'full', redirectTo: 'talks',
                //     data: {
                //         authorities: ['ROLE_USER'],
                //         pageTitle: 'greatBigExampleApplicationApp.talks.home.title',
                //         source: 'https://github.com/vsavkin/state-app-examples/tree/redux_with_router',
                //         tags: ['redux', 'routing']
                //     },
                //     canActivate: [UserRouteAccessService]
                // },
                {
                    path: '', component: TalksAndFiltersPage,
                    data: {
                        authorities: ['ROLE_USER'],
                        pageTitle: 'greatBigExampleApplicationApp.talks.home.title',
                        source: 'https://github.com/vsavkin/state-app-examples/tree/redux_with_router',
                        tags: ['redux', 'routing']
                    },
                    canActivate: [UserRouteAccessService]
                },
                {
                    path: 'talk/:id', component: TalkDetailsComponent,
                    data: {
                        authorities: ['ROLE_USER'],
                        pageTitle: 'greatBigExampleApplicationApp.talks.home.title',
                        source: 'https://github.com/vsavkin/state-app-examples/tree/redux_with_router',
                        tags: ['redux', 'routing']
                    },
                    canActivate: [UserRouteAccessService]
                }
            ]
        }
    ];

export const routedComponents = [TalksPage];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TalksRouting { }
