import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pred2win';
  isLoggedIn$ = new BehaviorSubject(false)

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(a => a as NavigationEnd)
    ).subscribe((navEnd: NavigationEnd) => {
      if(navEnd.url === "/" || navEnd.url.startsWith('/auth') ) {
        this.isLoggedIn$.next(false);
      } else {
        this.isLoggedIn$.next(true);
      }
    })
  }

  links = ['All', 'Live', 'Upcoming', 'Recent'];
  activeLink = this.links[0];

}
