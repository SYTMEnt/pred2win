import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MatchesState } from './state'

export const matchesSelector = createFeatureSelector<MatchesState>('matches')

export const matches = createSelector(matchesSelector, (matchesState: MatchesState) => matchesState.data);
export const matchesActions = createSelector(matchesSelector, (matchesState: MatchesState) => matchesState.actions);