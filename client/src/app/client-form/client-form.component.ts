import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidationServiceService } from '../services/password-validation-service.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder , private passwordValidationService:PasswordValidationServiceService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,this.passwordValidationService.passwordValidator]],
    });
  }

  onSubmit() {
    // Do something with the form data
    console.log(this.loginForm.value);
  }

 
}
