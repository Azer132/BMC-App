import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
// this is for angular material
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field'; // for form
import {MatInputModule} from '@angular/material/input';  // for input
import {MatButtonModule} from '@angular/material/button'; // for button
import {MatCardModule} from '@angular/material/card';  // card
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import { AuthService } from './auth/auth.service';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // those are for angular material
    FlexLayoutModule,
    MatFormFieldModule,// this for form field
    MatInputModule, // this for inout
    MatButtonModule, // for button
    MatCardModule ,// for card
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, // for form
    MatIconModule, //for an icon
    MatGridListModule,
    MatTabsModule,
    FormsModule  , 
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
