import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../services/user.service';
import { GoogleLoginService } from '../services/google-login.service';
@Injectable()

export class AuthGuard implements CanActivate {

    constructor(private googleLogin: GoogleLoginService, private router: Router, private userService: UserService) { }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {

        return new Promise(
            (resolve, reject) => {
                this.userService.getCurrentUser().then(user => {
                    if (user) {
                        return resolve(true)
                    }
                    else {
    
                        this.router.navigate(['login']);
                        return resolve(false);
                    }
                })

            }
        )



    }

}
