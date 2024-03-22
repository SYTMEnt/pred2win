import { ActionState } from "../types";
import { Leaderboard } from "./types";


export interface LeaderboardState {
    leaderboard : {
        data: Leaderboard | undefined,
        actions: ActionState
    }

}

export const initialState: LeaderboardState = {
    leaderboard: {
        data: undefined,
        actions: {
            httpError: undefined,
            processing: false,
            success: false
        }
    }

}