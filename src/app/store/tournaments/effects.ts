import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { TournamentService } from "src/app/features/tournaments/services/tournaments.service";
import * as tournamentActons from "./actions";
import { TournamentParams } from "../../features/tournaments/services/tournaments.service";

@Injectable()
export class TournamentsEffects {

    constructor(private actions$: Actions, private tournamentService: TournamentService) {}

    tournaments$ = createEffect(() => this.actions$.pipe(
        ofType(tournamentActons.tournaments),
        switchMap((action) => {
            const tournamentParams: TournamentParams = {
                userId: action.userId, 
                tournamentStatus: action.tournamentStatus 
            }
            return this.tournamentService.tournaments(tournamentParams).pipe(
                map((tournaments) => {
                    return tournamentActons.tournamentsSuccess({tournaments})
                }),
                catchError((httpError: HttpErrorResponse) => of(tournamentActons.tournamentsError({httpError})))
            )
        })
    ))

}