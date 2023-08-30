import { Component } from '@angular/core';
import { AuthStoreService } from 'src/app/store/auth/auth-store.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  constructor(private authStoreService: AuthStoreService) {}

  logout() {
    this.authStoreService.logout()
  }
}
