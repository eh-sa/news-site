import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './components/business/business.component';
import { LoginComponent } from './components/login/login.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SearchComponent } from './components/search/search.component';
import { TechnologyComponent } from './components/technology/technology.component';

const routes: Routes = [
  { path: '', redirectTo: '/home' , pathMatch: 'full'},
  { path: 'home', component: MainPageComponent },
  { path: 'search', component: SearchComponent }, // Top Headline & Home page
  { path: 'business' , component: BusinessComponent}, // Business Page
  { path : 'login' , component : LoginComponent}, // Login Page
  { path: 'technology', component: TechnologyComponent }, // Technology Page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
