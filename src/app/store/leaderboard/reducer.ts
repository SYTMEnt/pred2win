import { createReducer, on, Action } from "@ngrx/store";
import { LeaderboardState, initialState } from "./state";
import * as leaderboardActions from "./actions";

const leaderboardReducer = createReducer(
    initialState,
    on(leaderboardActions.leaderboard, (currentState, actionData) => ({
        ...currentState,
        leaderboard: {
            data: undefined,
            actions: {
                processing: true,
                success: false,
                httpError: undefined
            }
        }
    })),
    on(leaderboardActions.leaderboardSuccess, (currentState, actionsData) => ({
        ...currentState,
        leaderboard: {
            data: actionsData.leaderboard,
            actions: {
                processing: false,
                httpError: undefined,
                success: true
            }
        }
    })),
    on(leaderboardActions.leaderboardError, (currentState, { httpError }) => ({
        ...currentState,
        leaderboard: {
            data: undefined,
            actions: {
                processing: false,
                httpError,
                success: false
            }
        }
    })),
    on(leaderboardActions.reset, () => {
        console.log('Reset Action Dispatched');
        return {
            ...initialState
        };
    })
);


export function reducer(state: LeaderboardState = initialState, action: Action): LeaderboardState {
    return leaderboardReducer(state, action);
}