import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { Store } from '@ngrx/store';

import { StoreAndRouterConnectorGuard } from '../../core/store/store-and-router-connector.guard';
import { TalksAndFiltersPage } from "./talks-and-filters/talks-and-filters.page";
import { TalkDetailsComponent } from "./talk-details/talk-details.component";
import { TalksPage } from './talks.page';
import { UserRouteAccessService } from '../../shared';

const routes: Routes = [
    {
        path: '',
        component: TalksPage,
        canActivateChild: [StoreAndRouterConnectorGuard],
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
                path: '',
                component: TalksAndFiltersPage,
                data: {
                    authorities: ['ROLE_USER'],
                    pageTitle: 'greatBigExampleApplicationApp.talks.home.title',
                    source: 'https://github.com/vsavkin/state-app-examples/tree/redux_with_router',
                    tags: ['redux', 'routing']
                },
                canActivate: [UserRouteAccessService]
            },
            {
                path: 'talk/:id',
                component: TalkDetailsComponent,
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
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class TalksRouting { }
