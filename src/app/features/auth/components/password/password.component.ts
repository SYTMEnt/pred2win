import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthStoreService } from '../../../../store/auth/auth-store.service';
import { Password } from '../../../../store/auth/types';
import { passwordValidator } from '../../../../shared/services/password-validator.service'

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent {
    form = this.fb.group({
        userId: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16), passwordValidator]]
    })
    hidePassword = true;

    isAuthLoading$ = this.authStoreService.userProfileActions$.pipe(
        map(data => data.processing)
    )

  constructor(private fb: FormBuilder, private authStoreService: AuthStoreService,private snackBar: MatSnackBar) {}

    onSubmit() {
        if (this.form.valid) {
            this.authStoreService.password(this.form.value as Password);
            this.openSnackBar('Password updated successfully.');
        }
    }

    openSnackBar(message: string) {
        setTimeout(() => {
            this.snackBar.open(message, 'Close', {
                duration: 3000,
            });
        }, 1000); 
    }
    

    getFormControlErrors(formField: string): string {
        const errors = this.form.get(formField)?.errors;
        if(errors) {
            if(errors['required']) {
                return 'This field is required.'
            } else if (errors['minlength']) {
                const minLength = errors['minlength']?.requiredLength;
                return `Minimum length is ${minLength} characters.`
            } else if (errors['maxlength']) {
                const maxLength = errors['maxlength']?.requiredLength;
                return `Maximum length is ${maxLength} characters.`
            } else if (formField === 'password' && errors['invalidPassword']) {
                return 'A lower case, an upper case, a number and any alphanumeric char from [!,@,#,$] is required.'
            } 
        }
        return ''
    }
  
}
