import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HomeReaderComponent } from './nav-bar/home-reader.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { LoginComponent } from './login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FooterComponent } from './footer/footer.component';
import { BookProfileComponent } from './book-profile/book-profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LibHomeComponent } from './lib-home/lib-home.component';
import { RequestListComponent } from './request-list/request-list.component';
import { AprovedListComponent } from './aproved-list/aproved-list.component';
import { BookListComponent } from './book-list/book-list.component';
import { AddBookComponent } from './add-book/add-book.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryComponent } from './category/category.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    HomeComponent,
    HomeReaderComponent,
    LoginRegisterComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    FooterComponent,
    BookProfileComponent,
    UserProfileComponent,
    LibHomeComponent,
    RequestListComponent,
    AprovedListComponent,
    BookListComponent,
    AddBookComponent,
    CategoryComponent,
    
  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    NgbModule
  
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
