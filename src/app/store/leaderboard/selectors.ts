import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LeaderboardState } from './state'

export const leaderboardSelector = createFeatureSelector<LeaderboardState>('leaderboard')

export const leaderboard = createSelector(leaderboardSelector, (leaderboardState: LeaderboardState | any) => leaderboardState.reducer.data);
export const leaderboardActions = createSelector(leaderboardSelector, (leaderboardState: LeaderboardState | any) => leaderboardState.reducer.actions);