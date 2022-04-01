import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy{
 // properties
  authSub: Subscription | undefined
  isAuth: boolean | undefined;

  //  text fields for typed text
    text_key_partners: String="rass lambout"
    value = 'Clear me';
  constructor(private authService: AuthService) { }
  
  
  ngOnInit() {
    this.authSub=this.authService.authChange.subscribe(authStatus=>{
      this.isAuth=authStatus
    })
  }
  OnLogout(){
    this.authService.logout()
  }
  ngOnDestroy() {
    this.authSub?.unsubscribe();
  }

}
