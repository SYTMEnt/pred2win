import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from './state'

export const authSelector = createFeatureSelector<AuthState>('auth')

export const userProfile = createSelector(authSelector, (authState: AuthState) => authState.data);
export const userProfileActions = createSelector(authSelector, (authState: AuthState) => authState.actions);