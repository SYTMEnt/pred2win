import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from "@ngrx/store";
import { TournamentList } from "./types";
import { TournamentParams } from "../../features/tournaments/services/tournaments.service";

export const tournaments = createAction('[Tournaments] Get', props<TournamentParams>())
export const tournamentsSuccess = createAction('[Tournaments] Get Success', props<{ tournaments: TournamentList }>())
export const tournamentsError = createAction('[Tournaments] Get Error', props<{httpError: HttpErrorResponse}>())

export const reset = createAction('[Tournaments] Reset')