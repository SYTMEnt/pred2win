import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import * as leaderboardAction from "./actions";
import { NotificationService } from "../../shared/services/notification.service";
import { LeaderboardService } from "src/app/features/leaderboard/services/leaderboard.service";

@Injectable()
export class LeaderboardEffects {

    constructor(private actions$: Actions, private leaderboardService: LeaderboardService, private notifactionService: NotificationService) {}

    matches$ = createEffect(() => this.actions$.pipe(
        ofType(leaderboardAction.leaderboard),
        switchMap((action) => {
            return this.leaderboardService.leaderboard(action.tournamentId).pipe(
                map((leaderboardData) => {
                    return leaderboardAction.leaderboardSuccess({leaderboard: leaderboardData})
                }),
                catchError((httpError: HttpErrorResponse) => {
                    this.notifactionService.notify(httpError.message)
                    return of(leaderboardAction.leaderboardError({httpError}))}
                )
            )
        })
    ))

}