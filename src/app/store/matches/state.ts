import { ActionState } from "../types";
import { Matches } from "./types";


export interface MatchesState {
    data: Matches | undefined,
    actions: ActionState
}

export const initialState: MatchesState = {
    data: undefined,
    actions: {
        httpError: undefined,
        processing: false,
        success: false
    }
}