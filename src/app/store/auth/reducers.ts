import { createReducer, on, Action } from "@ngrx/store";
import { AuthState, initialState } from "./state";
import * as authActions from "./actions";

const authReducer = createReducer(
    initialState,
    on(authActions.signup, (currentState, actionData) => ({
        ...currentState,
        actions: {
            processing: true,
            success: false,
            httpError: undefined
        }
    })),
    on(authActions.signupSuccess, (currentState, actionsData) => ({
        data: actionsData,
        actions: {
            processing: false,
            httpError: undefined,
            success: true
        }
    })),
    on(authActions.signupHttpError, (currentState, { httpError }) => ({
        data: undefined,
        actions: {
            processing: false,
            httpError,
            success: false
        }
    })),
    on(authActions.login, (currentState, actionData) => ({
        ...currentState,
        actions: {
            processing: true,
            success: false,
            httpError: undefined
        }
    })),
    on(authActions.loginSuccess, (currentState, actionsData) => ({
        data: actionsData,
        actions: {
            processing: false,
            httpError: undefined,
            success: true
        }
    })),
    on(authActions.loginHttpError, (currentState, { httpError }) => ({
        data: undefined,
        actions: {
            processing: false,
            httpError,
            success: false
        }
    })),
    on(authActions.reset, () => ({
        ...initialState
    }))
)

export function reducer(state: AuthState = initialState, action: Action): AuthState {
    return authReducer(state, action);
}