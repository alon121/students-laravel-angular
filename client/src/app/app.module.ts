import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './modules/home/components/Forms/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { AuthService } from './core/authentication/auth.service';
import { AuthGuard } from './core/guards/auth.guard';
import { TokenInterceptorService } from './core/interceptors/token/token-interceptor.service';
import { StudentsComponent } from './modules/home/components/students/students.component';
import { HomeRoutingModule } from './modules/home/home-routing.module';
import { PagerService } from './core/services/pager.service';
import { DeleteComponent } from './modules/home/components/Forms/delete/delete.component';

import { CommonModule } from '@angular/common';  
import { AddComponent } from './modules/home/components/Forms/add/add.component';
import { EditComponent } from './modules/home/components/Forms/edit/edit.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import {AngularFireModule, FirebaseApp } from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LoginComponent,
    StudentsComponent,
    HeaderComponent,
    FooterComponent,
    AddComponent,
    EditComponent,
    DeleteComponent,
  ],
  imports: [CommonModule,
    BrowserModule,
    AngularFireAuthModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    BrowserModule,
     NgbModule,
    HttpClientModule, 
  ],
  providers: [PagerService, AuthService, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
