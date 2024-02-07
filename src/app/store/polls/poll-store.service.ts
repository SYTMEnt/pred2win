import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { PollsState } from "./state";
import * as pollsSelectors from "./selectors";
import * as pollsActions from "./actions";

@Injectable()
export class PollStoreService {

    readonly polls$ = this.store$.pipe(select(pollsSelectors.polls))
    readonly pollsActions$ = this.store$.pipe(select(pollsSelectors.pollsActions));

    constructor(private store$: Store<PollsState>) {}

    polls(matchId: string, pollType?: string) {
        this.store$.dispatch(pollsActions.polls({matchId, pollType}))
    }

    reset() {
        this.store$.dispatch(pollsActions.reset())
    }


}