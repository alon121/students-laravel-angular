import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './authentication/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { TokenInterceptorService } from './interceptors/token/token-interceptor.service';
import { StudentsComponent } from '../modules/home/components/students/students.component';
import { LoginComponent } from '../modules/home/components/Forms/login/login.component';
import { HomeRoutingModule } from '../modules/home/home-routing.module';
import { AddComponent } from '../modules/home/components/Forms/add/add.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentsComponent,
    HeaderComponent,
    FooterComponent,
    AddComponent,
    SidebarComponent
    
  ],
  imports: [
    BrowserModule,
    HomeRoutingModule,FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [AuthService, AuthGuard, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
