import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UsingHttpComponent } from './using-http/using-http.component';
import { UsingPipesComponent } from './using-pipes/using-pipes.component';
// import { UsingPipesComponent } from './using-pipes/using-pipes.component';

const routes: Routes = [
  {    path:'login',component : LoginComponent  },
  {    path:'dashboard',component:DashboardComponent  },
  {    path:'pipes',component:UsingPipesComponent   },
  {    path:'http',component:UsingHttpComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
