import { ActionState } from "../types";
import { PollList,  } from "./types";

export interface PollsState {
    polls: {
        data: PollList | undefined,
        actions: ActionState
    },
}

export const initialState: PollsState = {
    polls: {
        data: undefined,
        actions: {
            httpError: undefined,
            processing: false,
            success: false
        }
    }
}