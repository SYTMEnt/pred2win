import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from "@ngrx/store";
import { Signup, Login, User } from "./types";

export const signup = createAction('[User] Sign Up', props<Signup>());
export const signupSuccess = createAction('[User] Sign Up Succes', props<User>());
export const signupHttpError = createAction('[User] Sign Up Http Error', props<{httpError: HttpErrorResponse}>())

export const login = createAction('[User] Login', props<Login>());
export const loginSuccess = createAction('[User] Login Succes', props<User>());
export const loginHttpError = createAction('[User] Login Http Error', props<{httpError: HttpErrorResponse}>())

export const logout = createAction('[User] Logout')
export const reset = createAction('[User] Reset');