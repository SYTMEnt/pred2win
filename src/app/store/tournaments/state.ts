import { ActionState } from "../types";
import { TournamentList } from "./types";

export interface TournamentState {
    data: TournamentList | undefined,
    actions: ActionState
}

export const initialState: TournamentState = {
    data: undefined,
    actions: {
        httpError: undefined,
        processing: false,
        success: false
    }
}