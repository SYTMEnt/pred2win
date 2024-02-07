import { createReducer, on, Action } from "@ngrx/store";
import { PollsState, initialState } from "./state";
import * as pollActions from "./actions";

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
            data: actionsData.polls,
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
    on(pollActions.reset, () => ({
        ...initialState
    }))
)

export function reducer(state: PollsState = initialState, action: Action): PollsState {
    return pollsReducer(state, action);
}