import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { take } from 'rxjs';
import { AuthStoreService } from '../../../store/auth/auth-store.service';
import { User } from '../../../store/auth/types';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

    currentUserData?: User

    constructor(private fb: FormBuilder, private authStoreService: AuthStoreService) {
        this.form.controls.memberId.disable()
    }

    form = this.fb.group({
        displayName: '',
        email: '',
        memberId: ''
    })

    ngOnInit(): void {
        this.authStoreService.userProfile$.pipe(
            take(1)
        ).subscribe((user) => {
            if(user) {
                this.currentUserData = user;
                this.form.setValue({
                    displayName: user.displayName,
                    memberId: user.memberId,
                    email: user.email
                })
            }
        })
    }

    onSubmit() {
        if(
            this.currentUserData?.displayName === this.form.value.displayName &&
            this.currentUserData?.email === this.form.value.email
        ) {
            alert("Not Edited")
        } else {
            alert("Edited")
        }
    }
}
