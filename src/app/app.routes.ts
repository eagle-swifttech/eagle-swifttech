// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ViewprofileComponent } from './pages/viewprofile/viewprofile.component';
import { EditprofileComponent } from './pages/editprofile/editprofile.component';
import { ChangepasswordComponent } from './pages/changepassword/changepassword.component';
import { MybalanceComponent } from './pages/mybalance/mybalance.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'viewprofile', component: ViewprofileComponent },
  { path: 'editprofile', component: EditprofileComponent },
  { path: 'changepassword', component: ChangepasswordComponent },
  { path: 'mybalance', component: MybalanceComponent }
];
