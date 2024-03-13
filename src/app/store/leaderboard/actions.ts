import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from "@ngrx/store";
import { Leaderboard } from "./types";

export const leaderboard = createAction('[Leaderboard] Get', props<{tournamentId: string}>())
export const leaderboardSuccess = createAction('[Leaderboard] Get Success', props<{ leaderboard: Leaderboard }>())
export const leaderboardError = createAction('[Leaderboard] Get Error', props<{httpError: HttpErrorResponse}>())

export const reset = createAction('[Leaderboard] Reset')