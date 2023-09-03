import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from "@ngrx/store";
import { Matches } from "./types";

export const matches = createAction('[Matches] Get', props<{matchId: string, matchStatus?: string}>())
export const matchesSuccess = createAction('[Matches] Get Success', props<{ matches: Matches }>())
export const matchesError = createAction('[Matches] Get Error', props<{httpError: HttpErrorResponse}>())

export const reset = createAction('[Matches] Reset')