import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from "@ngrx/store";
import { TournamentList } from "./types";

export const tournaments = createAction('[Tournaments] Get')
export const tournamentsSuccess = createAction('[Tournaments] Get Success', props<{ tournaments: TournamentList }>())
export const tournamentsError = createAction('[Tournaments] Get Error', props<{httpError: HttpErrorResponse}>())

export const reset = createAction('[Tournaments] Reset')