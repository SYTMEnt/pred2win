import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import * as matchesActions from "./actions";
import { MatchesService } from "../../features/matches/services/matches.serves";

@Injectable()
export class MatchesEffects {

    constructor(private actions$: Actions, private matchesService: MatchesService) {}

    matches$ = createEffect(() => this.actions$.pipe(
        ofType(matchesActions.matches),
        switchMap((action) => {
            return this.matchesService.matches(action.tournamentId).pipe(
                map((matches) => {
                    return matchesActions.matchesSuccess({matches})
                }),
                catchError((httpError: HttpErrorResponse) => of(matchesActions.matchesError({httpError})))
            )
        })
    ))

}