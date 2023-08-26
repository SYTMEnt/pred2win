import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthStoreService } from './store/auth/auth-store.service';
import { loginSuccess } from './store/auth/actions'
import { Store } from '@ngrx/store';
import { AuthState } from './store/auth/state';
import { FooterNav } from './shared/components/nav-footer/nav-footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isLoggedIn$ = new BehaviorSubject(false)
  topNavlinks = ['All', 'Live', 'Upcoming', 'Recent'];
  footerNavLinks: FooterNav[] = [
    {
      route: 'tournaments',
      icon: 'sports_soccer'
    },
    {
      route: 'leaderboard',
      icon: 'leaderboard'
    },
    {
      route: 'forum',
      icon: 'forum'
    },
    {
      route: 'profile',
      icon: 'account_circle'
    }
  ]
  

  constructor(private router: Router, private authStoreService: AuthStoreService, private store$: Store<AuthState>) {}

  ngOnInit(): void {
    this.authStoreService.userProfile$.subscribe((user) => {
      if(user) {
        this.router.navigate(['/tournaments'])
        this.isLoggedIn$.next(true)
      } else {
        this.isLoggedIn$.next(false)
        this.router.navigate(['/auth/login'])
      }
    })

    this.authStoreService.getUser()
  }

  footerNavClick(route: string) {
    this.router.navigate([`/${route}`])
  }

  logout() {
    localStorage.removeItem('user')
    this.authStoreService.logout()
  }

}
