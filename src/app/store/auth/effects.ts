import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { AuthService } from "../../features/auth/services/auth.service";
import * as authActions from "./actions";
import { User } from "./types";

@Injectable()
export class AuthEffects {

    constructor(private actions$: Actions, private authService: AuthService) {}

    signup$ = createEffect(() => this.actions$.pipe(
        ofType(authActions.signup),
        switchMap((action) => {
            const user = {
                displayName: action.displayName,
                email: action.email,
                password: action.password
            };
            return this.authService.signup(user).pipe(
                map((user: User) => authActions.signupSuccess(user)),
                catchError((httpError: HttpErrorResponse) => of(authActions.signupHttpError({httpError})))
            )
        })
    ))

    login$ = createEffect(() => this.actions$.pipe(
        ofType(authActions.login),
        switchMap((action) => {
            const loginData = {
                email: action.email,
                password: action.password
            };
            return this.authService.login(loginData).pipe(
                map((user) => authActions.loginSuccess(user)),
                catchError((httpError: HttpErrorResponse) => of(authActions.loginHttpError({httpError})))
            )
        })
    ))

    logout$ = createEffect(() => this.actions$.pipe(
        ofType(authActions.logout),
        switchMap((action) => {
            return this.authService.logout().pipe(
                map(() => authActions.reset())
            )
        })
    ))
}