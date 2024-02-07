import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from "@ngrx/store";
import { PollList } from "./types";

export const polls = createAction('[Polls] Get', props<{matchId: string, pollType?: string}>())
export const pollsSuccess = createAction('[Polls] Get Success', props<{ polls: PollList }>())
export const pollsError = createAction('[Polls] Get Error', props<{httpError: HttpErrorResponse}>())

export const reset = createAction('[Polls] Reset')