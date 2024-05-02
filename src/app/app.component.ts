import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthStoreService } from './store/auth/auth-store.service';
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
  footerNavLinks: FooterNav[] = [
    {
      route: 'tournaments',
      icon: 'sports_soccer'
    },
    // {
    //   route: 'leaderboard',
    //   icon: 'leaderboard'
    // },
    {
      route: 'awards',
      icon: 'emoji_events'
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
    if(this.tokenService.getToken()) {
      this.authStoreService.getUser()
    }
  }

  footerNavClick(route: string) {
    this.router.navigate([`/${route}`])
  }

}
