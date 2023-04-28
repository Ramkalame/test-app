import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { HomeReaderComponent } from './nav-bar/home-reader.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { BookProfileComponent } from './book-profile/book-profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LibHomeComponent } from './lib-home/lib-home.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  {path:"home", component:HomeComponent}, 
  {path:"sign-in-up",component:LoginRegisterComponent},
  {path:"book/:isbn",component:BookProfileComponent},
  {path:"user",component:UserProfileComponent},
  {path:"lib-home",component:LibHomeComponent},
  {path:"category/:isbn", component:CategoryComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
