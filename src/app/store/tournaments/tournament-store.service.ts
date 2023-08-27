import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { TournamentState } from "./state";
import * as tournamentSelectors from "./selectors";
import * as tournamentActions from "./actions";
import { TournamentParams } from "../../features/tournaments/services/tournaments.service";

@Injectable()
export class TournamentStoreService {

    readonly tournaments$ = this.store$.pipe(select(tournamentSelectors.tournaments))
    readonly tournamentsActions$ = this.store$.pipe(select(tournamentSelectors.tournamentsActions));

    constructor(private store$: Store<TournamentState>) {}

    tournaments(params: TournamentParams) {
        this.store$.dispatch(tournamentActions.tournaments(params))
    }

    reset() {
        this.store$.dispatch(tournamentActions.reset())
    }


}