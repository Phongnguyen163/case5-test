import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginAndRegisterComponent} from "./login-and-register/login-and-register.component";

const routes: Routes = [{
  path: '',
  component: HomeComponent,
}, {
  path: 'login-and-register',
  component: LoginAndRegisterComponent,
  loadChildren: () => import('./login-and-register/login-and-register-routing.module').then(module => module.LoginAndRegisterRoutingModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
