import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';

import { FiltersComponent } from './filters/filters.component';
import { GreatBigExampleApplicationSharedModule } from '../../shared/shared.module';
import { FormatRatingPipe } from './format-rating/format-rating.pipe';
import { RateButtonComponent } from './rate-button/rate-button.component';
import { StoreAndRouterConnectorGuard } from '../../core/store/store-and-router-connector.guard';
import { TalkBackendService } from '../../core/services/talk-backend.service';
import { TalkComponent } from './talk/talk.component';
import { TalkDetailsComponent } from './talk-details/talk-details.component';
import { TalksAndFiltersPage } from './talks-and-filters/talks-and-filters.page';
import { TalksComponent } from './talks.component';
import { TalksPage } from './talks.page';
import { TalksRouting } from './talks.routing';
import { TalkWatchService } from '../../core/services/talk-watch.service';
import { WatchButtonComponent } from './watch-button/watch-button.component';
// import { reducer, initState } from './model';

@NgModule({
    imports: [
        GreatBigExampleApplicationSharedModule,
        HttpModule,
        MaterialModule,
        ReactiveFormsModule,
        TalksRouting,
    ],
    declarations: [
        FiltersComponent,
        FormatRatingPipe,
        RateButtonComponent,
        TalkComponent,
        TalkDetailsComponent,
        TalksAndFiltersPage,
        TalksComponent,
        TalksPage,
        WatchButtonComponent
    ],
    providers: [
        StoreAndRouterConnectorGuard,
        TalkBackendService,
        TalkWatchService
        // { provide: Store, useFactory: (backend, watch) => new Store(reducer(backend, watch), initState), deps: [TalkBackendService, TalkWatchService] },
    ]
})
export class TalksModule { }

