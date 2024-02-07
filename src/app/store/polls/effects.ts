import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators"
import * as pollActions from "./actions";
import { PollsService } from "../../features/polls/services/polls.service";

@Injectable()
export class PollsEffects {

    constructor(private actions$: Actions, private pollsService: PollsService) {}

    polls$ = createEffect(() => this.actions$.pipe(
        ofType(pollActions.polls),
        switchMap((action) => {
            return this.pollsService.polls(action.matchId, action.pollType).pipe(
                map((polls) => {
                    return pollActions.pollsSuccess({polls})
                }),
                catchError((httpError: HttpErrorResponse) => of(pollActions.pollsError({httpError})))
            )
        })
    ))

}