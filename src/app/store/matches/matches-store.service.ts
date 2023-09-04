import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { MatchesState } from "./state";
import * as matchesSelectors from "./selectors";
import * as matchesActions from "./actions";

@Injectable()
export class MatchesStoreService {

    readonly matches$ = this.store$.pipe(select(matchesSelectors.matches))
    readonly matchesActions$ = this.store$.pipe(select(matchesSelectors.matchesActions));

    constructor(private store$: Store<MatchesState>) {}

    matches(tournamentId: string, matchStatus?: string) {
        this.store$.dispatch(matchesActions.matches({tournamentId, matchStatus}))
    }

    reset() {
        this.store$.dispatch(matchesActions.reset())
    }


}