import { AuthData } from "./auth-data.model";
import { User } from "./user.model";
import { Subject } from 'rxjs'
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
@Injectable()
export class AuthService{
    private user={} as User ;
    authChange = new Subject<boolean>();
    constructor(private router : Router){}
    registerUser(authData :AuthData){
        this.user={
            email: authData.email,
            userId: Math.round(Math.random()*10000).toString()
        }
        this.authChange.next(true); // if true you are logged in now
        this.router.navigate(['/home'])
    }

    login(authData: AuthData){
        this.user={
            email: authData.email,
            userId: Math.round(Math.random()*10000).toString()
        }
        this.authChange.next(true); // if true you are logged in now
        this.router.navigate(['/home'])
    }

    logout(){
        this.authChange.next(false); // if false you are logged out 
        this.router.navigate(['/login'])
    }

    getUser(){
        return {...this.user};
    }

    isAuth(){
        return this.user != null;
    }

}