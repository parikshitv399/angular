import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserregComponent } from './userreg/userreg.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsingPipesComponent } from './using-pipes/using-pipes.component';
import { IsBlackListedPipe } from './is-black-listed.pipe';
import { HttpClientModule } from '@angular/common/http';
import { UsingHttpComponent } from './using-http/using-http.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserregComponent,
    DashboardComponent,
    UsingPipesComponent,
    IsBlackListedPipe,
    UsingHttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
