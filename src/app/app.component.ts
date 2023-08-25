import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthStoreService } from './store/auth/auth-store.service';
import { loginSuccess } from './store/auth/actions'
import { Store } from '@ngrx/store';
import { AuthState } from './store/auth/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isLoggedIn$ = new BehaviorSubject(false)
  topNavlinks = ['All', 'Live', 'Upcoming', 'Recent'];
  footerNavLinks = [
    {
      name: 'tournaments',
      icon: 'sports_soccer'
    },
    {
      name: 'leaderboard',
      icon: 'leaderboard'
    },
    {
      name: 'forum',
      icon: 'forum'
    },
    {
      name: 'profile',
      icon: 'account_circle'
    }
  ]
  

  constructor(private router: Router, private authStoreService: AuthStoreService, private store$: Store<AuthState>) {}

  ngOnInit(): void {
    this.authStoreService.userProfile$.subscribe((user) => {
      if(user) {
        this.router.navigate(['/app'])
        this.isLoggedIn$.next(true)
      } else {
        const userFromLocalStorage = localStorage.getItem('user');
        const parsedUserFromLocalStorage = userFromLocalStorage ? JSON.parse(userFromLocalStorage) : undefined;
        if (parsedUserFromLocalStorage) {
          this.store$.dispatch(loginSuccess(parsedUserFromLocalStorage));
        } else {
          this.isLoggedIn$.next(false)
          localStorage.removeItem('user')
          this.router.navigate(['/auth/login'])
        }
      }
    })
  }

  logout() {
    localStorage.removeItem('user')
    this.authStoreService.logout()
  }

}
