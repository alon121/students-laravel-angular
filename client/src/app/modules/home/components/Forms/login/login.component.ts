import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user/user';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { GoogleLoginService } from '../../../../../core/services/google-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private _auth: AuthService,private googleAuth:GoogleLoginService,
    private _router: Router) { }

loginUserData:User = {username: '',password: ''};
msgLogin:string;

 loginUser () {
 this._auth.loginUser(this.loginUserData)
 .subscribe(
 res => {
//  localStorage.setItem('token', res.token)
 this._router.navigate([`/editor/${this.loginUserData.username}`])
 },
 err => {
 this.msgLogin = "שם משתמש/סיסמה שגויים";
 console.log(err);

 }
 ) 
 }

 loginWithGoogle(){
  this.googleAuth.googleLogin().then(res => {
    this._router.navigate(['/students'])
  })}
  ngOnInit(): void {
  }

}
