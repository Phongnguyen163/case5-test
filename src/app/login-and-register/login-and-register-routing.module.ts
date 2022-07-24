import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "../login/login.component";
import {RegisterComponent} from "../register/register.component";
import {AuthGuard} from "../helper/auth-guard";
import {CommonModule} from "@angular/common";
import {LoginAndRegisterComponent} from "./login-and-register.component";
import {HomePageComponent} from "../user/home-page/home-page.component";

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
}, {
  path: 'register',
  component: RegisterComponent
}, {
  path: 'user',
  canActivate: [AuthGuard],
  component: HomePageComponent,
  loadChildren: () => import('../user/user-routing.module').then(module => module.UserRoutingModule)
}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class LoginAndRegisterRoutingModule {
}
