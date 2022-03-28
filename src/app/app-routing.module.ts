import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthModule } from './auth/auth.module';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { TestmonialComponent } from './testmonial/testmonial.component';

const routes: Routes = [
   {
    path:"about",
    component:AboutComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"testmonial",
    component:TestmonialComponent
  },
  {
    path:"auth",
    loadChildren:()=>AuthModule
  },
  {
    path:"",
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
