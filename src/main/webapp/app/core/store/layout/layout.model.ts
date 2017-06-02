import { BooksPageLayout, initialBooksPageLayout } from '../../../features/books/books.layout';
import { BerniePageLayout, initialBerniePageLayout } from '../../../features/bernie/bernie.layout';
import { HeroesDashboardLayout, initialHeroesDashboardPageLayout } from '../../../features/heroes/heroes.layout';

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
    booksPage: BooksPageLayout;
    berniePage: BerniePageLayout;
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
