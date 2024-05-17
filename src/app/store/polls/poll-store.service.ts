import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { PollsState } from "./state";
import * as pollsSelectors from "./selectors";
import * as pollsActions from "./actions";
import { PollSubmitParams } from "src/app/features/polls/services/polls.service";

@Injectable()
export class PollStoreService {

    readonly polls$ = this.store$.pipe(select(pollsSelectors.polls))
    readonly pollsActions$ = this.store$.pipe(select(pollsSelectors.pollsActions));

    constructor(private store$: Store<PollsState>) {}

    polls(matchId: string, userId: string, pollType?: string) {
        this.store$.dispatch(pollsActions.polls({matchId, userId, pollType}))
    }

    poll(pollId: string, userId: string) {
        this.store$.dispatch(pollsActions.poll({pollId, userId}))
    }

    pollSubmit(pollBody: PollSubmitParams) {
        this.store$.dispatch(pollsActions.pollSubmit({params: pollBody}))
    }

    reset() {
        this.store$.dispatch(pollsActions.reset())
    }

    

}