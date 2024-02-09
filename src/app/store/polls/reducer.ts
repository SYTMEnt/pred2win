import { createReducer, on, Action } from "@ngrx/store";
import { PollsState, initialState } from "./state";
import * as pollActions from "./actions";
import { getCurrentScope } from "immer/dist/internal";
import { polls } from "./selectors";

const pollsReducer = createReducer(
    initialState,
    on(pollActions.polls, (currentState, actionData) => ({
        ...currentState,
        polls: {
            data: undefined,
            actions: {
                processing: true,
                success: false,
                httpError: undefined
            }
        }
    })),
    on(pollActions.pollsSuccess, (currentState, actionsData) => ({
        ...currentState,
        polls: {
            data: actionsData.polls.reduce((accumulator, currentPoll) => {
                accumulator = {
                    ...accumulator, 
                    [currentPoll.pollId]: {
                        data: currentPoll,
                        actions: {
                            processing: false,
                            success: false,
                            httpError: undefined
                        }
                    }
                }
                return accumulator
            }, {}),
            actions: {
                processing: false,
                httpError: undefined,
                success: true
            }
        }
    })),
    on(pollActions.pollsError, (currentState, { httpError }) => ({
        ...currentState,
        polls: {
            data: undefined,
            actions: {
                processing: false,
                httpError,
                success: false
            }
        }
    })),
    on(pollActions.poll, (currentState, { pollId }) => ({
        ...currentState,
        polls: {
            ...currentState.polls,
            data: {
                ...currentState.polls.data,
                [pollId]: {
                    ...currentState.polls.data![pollId],
                    actions: {
                        processing: true,
                        success: false,
                        httpError: undefined
                    }
                }
            }
        }
    })),
    on(pollActions.pollSuccess, (currentState, {poll, pollId}) => ({
        ...currentState,
        polls: {
            ...currentState.polls,
            data: {
                ...currentState.polls.data,
                [pollId]: {
                    data: poll,
                    actions: {
                        processing: false,
                        success: true,
                        httpError: undefined
                    }
                }
            }
        }
    })),
    on(pollActions.pollError, (currentState, {pollId, httpError}) => ({
        ...currentState,
        polls: {
            ...currentState.polls,
            data: {
                ...currentState.polls.data,
                [pollId]: {
                    ...currentState.polls.data![pollId],
                    actions: {
                        processing: false,
                        success: true,
                        httpError: undefined
                    }
                }
            }
        }
    })),
    on(pollActions.pollSubmit, (currentState, {params}) => ({
        ...currentState,
        polls: {
            ...currentState.polls,
            data: {
                ...currentState.polls.data,
                [params.pollId]: {
                    ...currentState.polls.data![params.pollId],
                    actions: {
                        processing: true,
                        success: false,
                        httpError: undefined
                    }
                }
            }
        }
    })),
    on(pollActions.pollSubmitSuccess, (currentState, {pollId}) => ({
        ...currentState,
        polls: {
            ...currentState.polls,
            data: {
                ...currentState.polls.data,
                [pollId]: {
                    ...currentState.polls.data![pollId],
                    actions: {
                        processing: false,
                        success: true,
                        httpError: undefined
                    }
                }
            }
        }
    })),
    on(pollActions.pollSubmitError, (currentState, {pollId, httpError}) => ({
        ...currentState,
        polls: {
            ...currentState.polls,
            data: {
                ...currentState.polls.data,
                [pollId]: {
                    ...currentState.polls.data![pollId],
                    actions: {
                        processing: false,
                        success: false,
                        httpError: httpError
                    }
                }
            }
        }
    })),
    on(pollActions.reset, () => ({
        ...initialState
    }))
)

export function reducer(state: PollsState = initialState, action: Action): PollsState {
    return pollsReducer(state, action);
}