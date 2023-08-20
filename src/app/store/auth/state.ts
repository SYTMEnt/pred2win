import { HttpErrorResponse } from "@angular/common/http";
import { User } from "./types";

export interface AuthActionState {
    processing: boolean,
    httpError: HttpErrorResponse | undefined,
    success?: boolean
}

export interface AuthState {
    data: User,
    actions: AuthActionState
}

export const initialState: AuthState = {
    data: {
        displayName: '',
        memberId: ''
    },
    actions: {
        httpError: undefined,
        processing: false,
        success: false
    }
}