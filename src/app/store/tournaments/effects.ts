import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, of } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators"
import { TournamentJoinParams, TournamentService } from "../../features/tournaments/services/tournaments.service";
import * as tournamentActons from "./actions";
import { TournamentParams } from "../../features/tournaments/services/tournaments.service";
import { NotificationService } from "../../shared/services/notification.service";

@Injectable()
export class TournamentsEffects {

    constructor(private actions$: Actions, private tournamentService: TournamentService, private notificationService: NotificationService) {}

    tournaments$ = createEffect(() => this.actions$.pipe(
        ofType(tournamentActons.tournaments),
        switchMap((action) => {
            const params: TournamentParams = {
                userId: action.userId, 
                tournamentStatus: action.tournamentStatus 
            }
            return this.tournamentService.tournaments(params).pipe(
                map((tournaments) => {
                    return tournamentActons.tournamentsSuccess({tournaments})
                }),
                catchError((httpError: HttpErrorResponse) => {
                    this.notificationService.notify(httpError.message)
                    return of(tournamentActons.tournamentsError({httpError}))
                })
            )
        })
    ))

    join$ = createEffect(() => this.actions$.pipe(
        ofType(tournamentActons.join),
        switchMap((action) => {
            const params: TournamentJoinParams = {
                userId: action.userId,
                displayName: action.displayName,
                tournamentId: action.tournamentId,
                league: action.league
            }
            return this.tournamentService.join(params).pipe(
                map((msg) => {
                    return tournamentActons.joinSuccess({tournamentId: params.tournamentId});
                }),
                catchError((httpError: HttpErrorResponse) => {
                    this.notificationService.notify(httpError.message)
                    return of(tournamentActons.joinError({httpError}))
                })
            )
        })
    ))
}