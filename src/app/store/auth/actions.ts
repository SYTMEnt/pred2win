import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from "@ngrx/store";
import { Signup, Login, User } from "./types";

export const signup = createAction('[User] Sign Up', props<Signup>());
export const signupSuccess = createAction('[User] Sign Up Success');
export const signupHttpError = createAction('[User] Sign Up Http Error', props<{httpError: HttpErrorResponse}>())

export const login = createAction('[User] Login', props<Login>());
export const loginSuccess = createAction('[User] Login Success');
export const loginHttpError = createAction('[User] Login Http Error', props<{httpError: HttpErrorResponse}>())

export const getUser = createAction('[User] Get');
export const getUserSuccess = createAction('[User] Get Success', props<User>());
export const getUserError = createAction('[User] Get User Error', props<{httpError: HttpErrorResponse}>())

export const logout = createAction('[User] Logout')
export const reset = createAction('[User] Reset');