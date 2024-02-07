import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PollsState } from './state'

export const pollsSelector = createFeatureSelector<PollsState>('polls')

export const polls = createSelector(pollsSelector, (pollstate: PollsState) => pollstate.polls.data);
export const pollsActions = createSelector(pollsSelector, (pollstate: PollsState) => pollstate.polls.actions);
