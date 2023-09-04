import { Component } from '@angular/core';
import { AuthStoreService } from '../../store/auth/auth-store.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  activeLink = "account"

  constructor(private authStoreService: AuthStoreService) {}

  logout() {
    this.authStoreService.logout()
  }
  
}
