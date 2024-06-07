import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from "@ngrx/store";
import { PollSubmitParams } from "../../features/polls/services/polls.service";
import { Poll, PollList } from "./types";

export const polls = createAction('[Polls] Get', props<{matchId: string, userId: string, pollType?: string}>())
export const pollsSuccess = createAction('[Polls] Get Success', props<{ polls: PollList }>())
export const pollsError = createAction('[Polls] Get Error', props<{httpError: HttpErrorResponse}>())

export const tpolls = createAction('[Polls] Get', props<{tournamentId: string, userId: string, pollType?: string}>())
export const tpollsSuccess = createAction('[Polls] Get Success', props<{ polls: PollList }>())
export const tpollsError = createAction('[Polls] Get Error', props<{httpError: HttpErrorResponse}>())

export const poll = createAction('[Polls] Get by Id', props<{pollId: string, userId: string}>())
export const pollSuccess = createAction('[Polls] Get by Id Success', props<{pollId: string, poll: Poll}>())
export const pollError = createAction('[Polls] Get by Id Error', props<{pollId: string, httpError: HttpErrorResponse}>())

export const pollSubmit = createAction('[Polls] Submit', props<{params: PollSubmitParams}>())
export const pollSubmitSuccess = createAction('[Poll] Submit Success', props<{pollId: string, userId: string}>())
export const pollSubmitError = createAction('[Polls] Submit Error', props<{pollId: string, httpError: HttpErrorResponse}>())

export const reset = createAction('[Polls] Reset')