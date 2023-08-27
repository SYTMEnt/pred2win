import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TournamentState } from './state'

export const tournamentsSelector = createFeatureSelector<TournamentState>('tournaments')

export const tournaments = createSelector(tournamentsSelector, (tournamentState: TournamentState) => tournamentState.data);
export const tournamentsActions = createSelector(tournamentsSelector, (tournamentState: TournamentState) => tournamentState.actions);