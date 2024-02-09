import { ActionState } from "../types";
import { Poll,  } from "./types";

export interface PollsState {
    polls: {
        data: {
            [pollId: string]: {
                data: Poll,
                actions: ActionState
            }
        } | undefined,
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