import { Component, OnInit } from '@angular/core';
import { GoogleLoginService } from '../services/google-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private googleService:GoogleLoginService, private router:Router) { }
  logout(){
    this.googleService.logout();
  this.router.navigate(['/login'])
  }
  ngOnInit(): void {
  }

}
