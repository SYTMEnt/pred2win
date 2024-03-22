import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LeaderboardState } from './state'

export const leaderboardSelector = createFeatureSelector<LeaderboardState>('leaderboard')

export const leaderboard = createSelector(leaderboardSelector, (leaderboardState: LeaderboardState) => leaderboardState.leaderboard.data);
export const leaderboardActions = createSelector(leaderboardSelector, (leaderboardState: LeaderboardState) => leaderboardState.leaderboard.actions);