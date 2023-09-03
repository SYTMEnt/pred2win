import { ActionState } from "../types";
import { TournamentList, JoinTournament } from "./types";

export interface TournamentState {
    tournaments: {
        data: TournamentList | undefined,
        actions: ActionState
    },
    join: {
        data: JoinTournament | undefined,
        actions: ActionState
    }
}

export const initialState: TournamentState = {
    tournaments: {
        data: undefined,
        actions: {
            httpError: undefined,
            processing: false,
            success: false
        }
    },
    join: {
        data: undefined,
        actions: {
            httpError: undefined,
            processing: false,
            success: false
        }
    }
}