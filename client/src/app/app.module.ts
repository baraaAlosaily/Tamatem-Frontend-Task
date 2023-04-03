import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClientLogoComponent } from './client-logo/client-logo.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ClientLoginComponent } from './client-login/client-login.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientLogoComponent,
    ClientFormComponent,
    ClientLoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
