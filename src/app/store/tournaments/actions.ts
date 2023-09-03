import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from "@ngrx/store";
import { JoinTournament, TournamentList } from "./types";
import { TournamentJoinParams, TournamentParams } from "../../features/tournaments/services/tournaments.service";

export const tournaments = createAction('[Tournaments] Get', props<TournamentParams>())
export const tournamentsSuccess = createAction('[Tournaments] Get Success', props<{ tournaments: TournamentList }>())
export const tournamentsError = createAction('[Tournaments] Get Error', props<{httpError: HttpErrorResponse}>())

export const join = createAction('[Tournamet] Join', props<TournamentJoinParams>())
export const joinSuccess = createAction('[Tournamet] Join Success', props<JoinTournament>())
export const joinError = createAction('[Tournamet] Join Error', props<{httpError: HttpErrorResponse}>())

export const reset = createAction('[Tournaments] Reset')