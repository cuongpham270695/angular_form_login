import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormLoginComponent} from "./form-login/form-login.component";

const routes: Routes = [
  {
    path: 'login',
    component: FormLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
