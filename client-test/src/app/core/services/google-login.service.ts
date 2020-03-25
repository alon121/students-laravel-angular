
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';



@Injectable({
  providedIn: 'root'
})
export class GoogleLoginService {

  constructor(public afAuth:AngularFireAuth) { }

  googleLogin() 
  {
    return new Promise<any>((resolve,reject) =>{
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth.signInWithPopup(provider).then(
        data => {
          resolve(data)
        },
        err => {
          reject(err);
        }
      );
    })
  }

 
logout(){
  return new Promise(
    (resolve,reject) => {
      if(firebase.auth().currentUser){
        this.afAuth.auth.signOut();
        resolve(true);
      }
      else{
        reject();
      }
    }
  )
}



}
