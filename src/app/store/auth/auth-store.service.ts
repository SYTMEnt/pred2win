import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";

import { AuthState } from "./state";
import * as authSelectors from "./selectors";
import * as authActions from "./actions";
import { Auth } from "./types";

@Injectable()
export class AuthStoreService {

    readonly userProfile$ = this.store$.pipe(select(authSelectors.userProfile))
    readonly userProfileActions$ = this.store$.pipe(select(authSelectors.userProfileActions));

    constructor(private store$: Store<AuthState>) {}

    login(user: Pick<Auth, 'email' | 'password'>): void {
        this.store$.dispatch(authActions.login(user));
    }
    
    signup(user: Auth): void {
        this.store$.dispatch(authActions.signup(user));
    }

    logout(): void {
        this.store$.dispatch(authActions.logout());
    }

}