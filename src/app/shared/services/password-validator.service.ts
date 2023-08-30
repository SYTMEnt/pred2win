import { AbstractControl } from "@angular/forms";

export const passwordValidator = (control: AbstractControl) => {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#])[A-Za-z\d@$!#]+$/;
    if (control.value && !pattern.test(control.value)) {
      return { invalidPassword: true };
    }
    return null;
}