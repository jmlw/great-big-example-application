import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { Store } from '@ngrx/store';

import { TalksComponent } from './talks.component';
import { TalkComponent } from './talk/talk.component';
import { WatchButtonComponent } from './watch-button/watch-button.component';
import { RateButtonComponent } from './rate-button/rate-button.component';
import { FormatRatingPipe } from './format-rating/format-rating.pipe';
import { FiltersComponent } from './filters/filters.component';
import { RouterModule } from '@angular/router';
import { TalksAndFiltersPage } from './talks-and-filters/talks-and-filters.page';
import { TalkDetailsComponent } from './talk-details/talk-details.component';
import { HttpModule } from '@angular/http';
import { TalkBackendService } from '../../core/services/talk-backend.service';
import { TalkWatchService } from '../../core/services/talk-watch.service';
import { StoreAndRouterConnectorGuard } from '../../core/store/store-and-router-connector.guard';
// import { reducer, initState } from './model';

import { GreatBigExampleApplicationSharedModule } from '../../shared/shared.module';
import { TalksPage } from './talks.page';
import { TalksRouting } from './talks.routing';

@NgModule({
    declarations: [
        FiltersComponent,
        FormatRatingPipe,
        GreatBigExampleApplicationSharedModule,
        RateButtonComponent,
        TalkComponent,
        TalkDetailsComponent,
        TalksAndFiltersPage,
        TalksComponent,
        TalksPage,
        WatchButtonComponent
    ],
    imports: [
        ReactiveFormsModule,
        HttpModule,
        MaterialModule,
        TalksRouting,
    ],
    providers: [
        TalkBackendService,
        TalkWatchService,
        // { provide: Store, useFactory: (backend, watch) => new Store(reducer(backend, watch), initState), deps: [TalkBackendService, TalkWatchService] },
        StoreAndRouterConnectorGuard
    ]
})
export class AppModule { }

