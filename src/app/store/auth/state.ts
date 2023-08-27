import { ActionState } from "../types";
import { User } from "./types";

export interface AuthState {
    data: User | undefined,
    actions: ActionState
}

export const initialState: AuthState = {
    data: undefined,
    actions: {
        httpError: undefined,
        processing: false,
        success: false
    }
}