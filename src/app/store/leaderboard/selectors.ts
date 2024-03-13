import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LeaderboardState } from './state'

export const leaderboardSelector = createFeatureSelector<LeaderboardState>('leaderboard')

export const leaderboard = createSelector(leaderboardSelector, (leaderboardState: LeaderboardState) => leaderboardState.data);
export const leaderboardActions = createSelector(leaderboardSelector, (leaderboardState: LeaderboardState) => leaderboardState.actions);