import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './login/login.component';
import { FeedComponent } from './feed/feed.component';

const routes: Routes = [
  { path: 'feed', component: FeedComponent },
  { path: 'register', component: RegisterComponent },  // Route for RegisterComponent
  { path: 'login', component: LoginComponent },        // Route for LoginComponent
  { path: '', redirectTo: '/register', pathMatch: 'full' }, // Default route to redirect to Register
  { path: '**', redirectTo: '/register', pathMatch: 'full' } // Wildcard route to handle undefined paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
