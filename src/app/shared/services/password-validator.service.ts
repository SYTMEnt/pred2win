import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordValidator = (control: AbstractControl) => {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#])[A-Za-z\d@$!#]+$/;
    if (control.value && !pattern.test(control.value)) {
      return { invalidPassword: true };
    }
    return null;
}

export function passwordMatchValidator(password: string, confirmPassword: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const passwordControl = control.get(password);
    const confirmPasswordControl = control.get(confirmPassword);

    if (!passwordControl || !confirmPasswordControl) {
      return null;
    }

    const areEqual = passwordControl.value === confirmPasswordControl.value;

    return areEqual ? null : { passwordsMismatch: true };
  };
}