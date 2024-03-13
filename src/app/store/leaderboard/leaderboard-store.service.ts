import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { LeaderboardState } from "./state";
import * as leaderboardSelectors from "./selectors";
import * as leaderboardActions from "./actions";

@Injectable()
export class LeaderboardStoreService {

    readonly leaderboard$ = this.store$.pipe(select(leaderboardSelectors.leaderboard))
    readonly leaderboardActions$ = this.store$.pipe(select(leaderboardSelectors.leaderboardActions));

    constructor(private store$: Store<LeaderboardState>) {}

    leaderboard(tournamentId: string) {
        this.store$.dispatch(leaderboardActions.leaderboard({tournamentId}))
    }

    reset() {
        this.store$.dispatch(leaderboardActions.reset())
    }


}