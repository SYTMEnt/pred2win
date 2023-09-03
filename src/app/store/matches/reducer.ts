import { createReducer, on, Action } from "@ngrx/store";
import { MatchesState, initialState } from "./state";
import * as matchesActions from "./actions";

const matchesReducer = createReducer(
    initialState,
    on(matchesActions.matches, (currentState, actionData) => ({
        data: undefined,
        actions: {
            processing: true,
            success: false,
            httpError: undefined
        }
    })),
    on(matchesActions.matchesSuccess, (currentState, actionsData) => ({
        data: actionsData.matches,
        actions: {
            processing: false,
            httpError: undefined,
            success: true
        }
    })),
    on(matchesActions.matchesError, (currentState, { httpError }) => ({
        data: undefined,
        actions: {
            processing: false,
            httpError,
            success: false
        }
    })),
    on(matchesActions.reset, () => ({
        ...initialState
    }))
)

export function reducer(state: MatchesState = initialState, action: Action): MatchesState {
    return matchesReducer(state, action);
}