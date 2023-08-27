import { HttpErrorResponse } from "@angular/common/http";

export interface ActionState {
    processing: boolean,
    httpError: HttpErrorResponse | undefined,
    success?: boolean
}