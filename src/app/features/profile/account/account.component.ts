import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { take } from 'rxjs';
import { AuthStoreService } from '../../../store/auth/auth-store.service';
import { User } from '../../../store/auth/types';
import { AccountService } from './account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  providers: [AccountService]
})
export class AccountComponent implements OnInit {

    currentUserData?: User

    constructor(private fb: FormBuilder, private authStoreService: AuthStoreService, private accountService: AccountService) {
        this.form.controls.memberId.disable()
        this.form.controls.displayName.disable()
    }

    form = this.fb.group({
        displayName: '',
        email: '',
        memberId: '',
        name: '', 
        mobile: '',
        location: '',
        pic:'',
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
                    email: user.email,
                    name: user.name || '', 
                    mobile: user.mobile || '',
                    location: user.location || '',
                    pic: user.pic || ''
                })
            }
        })
    }

    onSubmit() {
        const updatedData: any = {
            memberId: this.currentUserData?.memberId 
        };
    
        if (this.currentUserData?.email !== this.form.value.email) {
            updatedData.email = this.form.value.email;
        }
        if (this.currentUserData?.name !== this.form.value.name) {
            updatedData.name = this.form.value.name;
        }
        if (this.currentUserData?.mobile !== this.form.value.mobile) {
            updatedData.mobile = this.form.value.mobile;
        }
        if (this.currentUserData?.location !== this.form.value.location) {
            updatedData.location = this.form.value.location;
        }
    
        if (Object.keys(updatedData).length === 1) {
            alert('No changes made');
            return;
        }
    
        this.accountService.updateAccount(updatedData).subscribe(() => {
            alert('Updated successfully');
        });
    }
    
}
