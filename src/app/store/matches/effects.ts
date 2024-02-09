import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import * as matchesActions from "./actions";
import { MatchesService } from "../../features/matches/services/matches.serves";
import { NotificationService } from "../../shared/services/notification.service";

@Injectable()
export class MatchesEffects {

    constructor(private actions$: Actions, private matchesService: MatchesService, private notifactionService: NotificationService) {}

    matches$ = createEffect(() => this.actions$.pipe(
        ofType(matchesActions.matches),
        switchMap((action) => {
            return this.matchesService.matches(action.tournamentId, action.matchStatus).pipe(
                map((matches) => {
                    return matchesActions.matchesSuccess({matches})
                }),
                catchError((httpError: HttpErrorResponse) => {
                    this.notifactionService.notify(httpError.message)
                    return of(matchesActions.matchesError({httpError}))}
                )
            )
        })
    ))

}