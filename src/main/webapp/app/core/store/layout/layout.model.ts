// TODO: Think about renaming this. It's more of a user controls slice than a layout per se
// Also, these data should be defined in the features directory since they are UI specific

import { slices } from '../util';

export interface NavLayout {
    showSidenav: boolean;
}

export const initialNavLayout = {
    showSidenav: false
};

export interface BooksPageLayout {
    query: string;
};

export const initialBooksPageLayout = {
    query: ''
};

export interface BerniePageLayout {
    editable: boolean;
    expanded: boolean;
    scrollY: number;
    bernieSearchTerm: string;
    // isTouched: Function;
};

export const initialBerniePageLayout: BerniePageLayout = {
    editable: false,
    expanded: false,
    scrollY: 0,
    bernieSearchTerm: ''
    // isTouched: function (claims) {
    //   let _touched = false;
    //   claims.forEach(claim => {
    //     claim.rebuttals.forEach(rebuttal => {
    //       if (rebuttal && rebuttal.isTouched()) {
    //         _touched = true;
    //       }
    //     });
    //   });
    //   return _touched;
    // }
};

export interface HeroesDashboardLayout {
    heroSearchTerm: string;
}

export const initialHeroesDashboardPageLayout = {
    heroSearchTerm: ''
};

/**
 * Talks
 */
export type Filters = { speaker: string, title: string, minRating: number };

export interface TalksPageLayout {
    filters: Filters
}

export const initialTalksPageLayout = {
    filters: {
        speaker: null,
        title: null,
        minRating: 0
    }
};

/**
 * Combination of everything
 */
export interface Layout {
    berniePage: BerniePageLayout;
    booksPage: BooksPageLayout;
    heroesDashboardPage: HeroesDashboardLayout;
    msg: string;
    nav: NavLayout;
    talksPage: TalksPageLayout;
}

export function initialLayout() {
    return {
        berniePage: initialBerniePageLayout,
        booksPage: initialBooksPageLayout,
        heroesDashboardPage: initialHeroesDashboardPageLayout,
        msg: '',
        nav: initialNavLayout,
        talksPage: initialTalksPageLayout
    };
}
