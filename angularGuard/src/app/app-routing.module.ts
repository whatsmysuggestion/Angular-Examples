import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Application omponents.
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';

// Authentication guard.
// Will dispay the login component if the admin component is clicked!
import { LoginGuard } from './guard/login.guard';

// Routes definition.
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: UserComponent },
  { path: 'admin', component: AdminComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginComponent }  // Will be activated by the login-guard to check user is authorised to access admin page.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
