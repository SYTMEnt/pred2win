import { Component } from '@angular/core';
import { AuthStoreService } from '../../store/auth/auth-store.service';
import { User } from '../../store/auth/types';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  activeLink = "account";
  currentUserData?: User;

  constructor(private authStoreService: AuthStoreService) {}

  ngOnInit(): void {
    this.authStoreService.userProfile$.subscribe((user) => {
      this.currentUserData = user;
    });
  }

  logout() {
    this.authStoreService.logout()
  }
  
}
