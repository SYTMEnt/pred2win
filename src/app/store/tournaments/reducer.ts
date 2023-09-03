import { createReducer, on, Action } from "@ngrx/store";
import { TournamentState, initialState } from "./state";
import * as tournamentActions from "./actions";

const tournamentsReducer = createReducer(
    initialState,
    on(tournamentActions.tournaments, (currentState, actionData) => ({
        ...currentState,
        tournaments: {
            data: undefined,
            actions: {
                processing: true,
                success: false,
                httpError: undefined
            }
        }
    })),
    on(tournamentActions.tournamentsSuccess, (currentState, actionsData) => ({
        ...currentState,
        tournaments: {
            data: actionsData.tournaments,
            actions: {
                processing: false,
                httpError: undefined,
                success: true
            }
        }
    })),
    on(tournamentActions.tournamentsError, (currentState, { httpError }) => ({
        ...currentState,
        tournaments: {
            data: undefined,
            actions: {
                processing: false,
                httpError,
                success: false
            }
        }
    })),
    on(tournamentActions.join, (currentStatus, actionData) => ({
        ...currentStatus,
        joined: {
            data: undefined,
            actions: {
                processing: true,
                success: false,
                httpError: undefined
            }
        }
    })),
    on(tournamentActions.joinSuccess, (currentStatus, actionData) => ({
        ...currentStatus,
        joined: {
            data: actionData,
            actions: {
                processing: false,
                success: true,
                httpError: undefined
            }
        }
    })),
    on(tournamentActions.joinError, (currentStatus, { httpError }) => ({
        ...currentStatus,
        joined: {
            data: undefined,
            actions: {
                processing: false,
                success: false,
                httpError
            }
        }
    })),
    on(tournamentActions.reset, () => ({
        ...initialState
    }))
)

export function reducer(state: TournamentState = initialState, action: Action): TournamentState {
    return tournamentsReducer(state, action);
}