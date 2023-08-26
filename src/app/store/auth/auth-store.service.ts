import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";

import { AuthState } from "./state";
import * as authSelectors from "./selectors";
import * as authActions from "./actions";
import { Signup, Login, User } from "./types";

@Injectable()
export class AuthStoreService {

    readonly userProfile$ = this.store$.pipe(select(authSelectors.userProfile))
    readonly userProfileActions$ = this.store$.pipe(select(authSelectors.userProfileActions));

    constructor(private store$: Store<AuthState>) {}

    login(user: Login): void {
        this.store$.dispatch(authActions.login(user));
    }
    
    signup(user: Signup): void {
        this.store$.dispatch(authActions.signup(user));
    }

    logout(): void {
        this.store$.dispatch(authActions.logout());
    }

    getUser(): void {
        this.store$.dispatch(authActions.getUser());
    }
}