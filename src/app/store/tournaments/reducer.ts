import { createReducer, on, Action } from "@ngrx/store";
import { TournamentState, initialState } from "./state";
import * as tournamentActions from "./actions";

const tournamentsReducer = createReducer(
    initialState,
    on(tournamentActions.tournaments, (currentState, actionData) => ({
        ...currentState,
        actions: {
            processing: true,
            success: false,
            httpError: undefined
        }
    })),
    on(tournamentActions.tournamentsSuccess, (currentState, actionsData) => ({
        data: actionsData.tournaments,
        actions: {
            processing: false,
            httpError: undefined,
            success: true
        }
    })),
    on(tournamentActions.tournamentsError, (currentState, { httpError }) => ({
        data: undefined,
        actions: {
            processing: false,
            httpError,
            success: false
        }
    })),
    on(tournamentActions.reset, () => ({
        ...initialState
    }))
)

export function reducer(state: TournamentState = initialState, action: Action): TournamentState {
    return tournamentsReducer(state, action);
}