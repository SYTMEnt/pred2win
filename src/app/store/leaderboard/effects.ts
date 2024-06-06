import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import * as leaderboardActions from "./actions";
import { NotificationService } from "../../shared/services/notification.service";
import { LeaderboardService } from "src/app/features/leaderboard/services/leaderboard.service";

@Injectable()
export class LeaderboardEffects {

    constructor(private actions$: Actions, private leaderboardService: LeaderboardService, private notificationService: NotificationService) {}

    leaderboard$ = createEffect(() => this.actions$.pipe(
        ofType(leaderboardActions.leaderboard),
        switchMap((action) => {
            return this.leaderboardService.leaderboard(action.tournamentId).pipe(
                map((leaderboard) => {
                    return leaderboardActions.leaderboardSuccess({leaderboard})
                }),
                catchError((httpError: HttpErrorResponse) => {
                    this.notificationService.notify(httpError.error.message || httpError.message)
                    return of(leaderboardActions.leaderboardError({httpError}))}
                )
            )
        })
    ))

}