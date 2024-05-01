import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { NotificationService } from "../../shared/services/notification.service";
import { AuthService } from "../../features/auth/services/auth.service";
import * as authActions from "./actions";

@Injectable()
export class AuthEffects {

    constructor(private actions$: Actions, private authService: AuthService, private notificationService: NotificationService) {}

    signup$ = createEffect(() => this.actions$.pipe(
        ofType(authActions.signup),
        switchMap((action) => {
            const user = {
                displayName: action.displayName,
                email: action.email,
                password: action.password
            };
            return this.authService.signup(user).pipe(
                map((data: any) => {
                    localStorage.setItem('token', data.token)
                    return authActions.signupSuccess()
                }),
                catchError((httpError: HttpErrorResponse) => {
                    this.notificationService.notify(httpError.message)
                    return of(authActions.signupHttpError({httpError}))
                })
            )
        })
    ))

    login$ = createEffect(() => this.actions$.pipe(
        ofType(authActions.login),
        switchMap((action) => {
            const loginData = {
                userName: action.userName,
                password: action.password
            };
            return this.authService.login(loginData).pipe(
                map((data: any) => {
                    localStorage.setItem('token', data.token)
                    return authActions.loginSuccess()
                }),
                catchError((httpError: HttpErrorResponse) => {
                    this.notificationService.notify(httpError.message)
                    return of(authActions.loginHttpError({httpError}))
                })
            )
        })
    ))

    user$ = createEffect(() => this.actions$.pipe(
        ofType(authActions.getUser, authActions.loginSuccess, authActions.signupSuccess),
        switchMap(() => {
            return this.authService.user().pipe(
                map((user) => {
                    return authActions.getUserSuccess(user)
                }),
                catchError((httpError: HttpErrorResponse) => {
                    this.notificationService.notify(httpError.message)
                    return of(authActions.getUserError({httpError}))
                })
            )
        })
    ))

    logout$ = createEffect(() => this.actions$.pipe(
        ofType(authActions.logout),
        switchMap((action) => {
            return this.authService.logout().pipe(
                map(() => {
                    localStorage.removeItem('token')
                    return authActions.reset()
                }),
                catchError((httpError) => {
                    this.notificationService.notify(httpError.message)
                    return of(authActions.reset())
                })
            )
        })
    ))
}