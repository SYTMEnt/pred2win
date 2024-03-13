import { createReducer, on, Action } from "@ngrx/store";
import { LeaderboardState, initialState } from "./state";
import * as matchesActions from "./actions";

const leaderboardReducer = createReducer(
    initialState,
    on(matchesActions.leaderboard, (currentState, actionData) => ({
        data: undefined,
        actions: {
            processing: true,
            success: false,
            httpError: undefined
        }
    })),
    on(matchesActions.leaderboardSuccess, (currentState, actionsData) => ({
        data: actionsData.leaderboard,
        actions: {
            processing: false,
            httpError: undefined,
            success: true
        }
    })),
    on(matchesActions.leaderboardError, (currentState, { httpError }) => ({
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

export function reducer(state: LeaderboardState = initialState, action: Action): LeaderboardState {
    return leaderboardReducer(state, action);
}