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
        ...currentState,
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
        ...currentState,
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
    on(authActions.password, (currentState, actionData) => ({
        ...currentState,
        actions: {
            processing: true,
            success: false,
            httpError: undefined
        }
    })),
    on(authActions.passwordSuccess, (currentState, actionsData) => ({
        ...currentState,
        actions: {
            processing: false,
            httpError: undefined,
            success: true
        }
    })),
    on(authActions.passwordHttpError, (currentState, { httpError }) => ({
        data: undefined,
        actions: {
            processing: false,
            httpError,
            success: false
        }
    })),
    on(authActions.getUser, (currentState, actionsData) => ({
        ...currentState,
        actions: {
            processing: true,
            success: false,
            httpError: undefined
        }
    })),
    on(authActions.getUserSuccess, (currentState, actionsData) => ({
        data: actionsData,
        actions: {
            processing: false,
            success: true,
            httpError: undefined
        }
    })),
    on(authActions.getUserError, (currentState, { httpError }) => ({
        data: undefined,
        actions: {
            processing: false,
            success: false,
            httpError
        }
    })),
    on(authActions.reset, () => ({
        ...initialState
    }))
)

export function reducer(state: AuthState = initialState, action: Action): AuthState {
    return authReducer(state, action);
}