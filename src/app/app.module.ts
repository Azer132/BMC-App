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
import {MatToolbarModule} from '@angular/material/toolbar';  // for toolbar
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
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
    MatToolbarModule, //for toolbar
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
