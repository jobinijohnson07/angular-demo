import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ./app.component
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


const appRoutes: Routes = [
{
    path: '',
    // redirectTo: '/login',
    // pathMatch: 'full',
    component: LoginComponent
},  

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    MatCardModule,
    MDBBootstrapModule.forRoot()
  ],
  exports: [RouterModule,
            MatCardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

