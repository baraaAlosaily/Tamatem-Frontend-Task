import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PasswordValidationServiceService {
  passwordValidator(control: AbstractControl) {
    // Check if the control value exists
    if (!control.value) {
      return null;
    }
  
    // Check if the password contains at least 8 characters
    if (control.value.length < 4) {
      return { invalidPassword: true };
    }
  
    // Check if the password contains at least one uppercase letter
    if (!/[A-Z]/.test(control.value)) {
      return { invalidPassword: true };
    }
  
    // Check if the password contains at least one lowercase letter
    if (!/[a-z]/.test(control.value)) {
      return { invalidPassword: true };
    }
  
    // Return null if the password is valid
    return null;
  }
}
