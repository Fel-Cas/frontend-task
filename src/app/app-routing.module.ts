import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//components
import { TaskComponent } from './components/task/task.component';
import { SignupComponent } from './components/signup/signup.component';
import { SiginComponent } from './components/sigin/sigin.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/signup',
    pathMatch:'full'

  },
  {
    path:'task',
    component:TaskComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'signin',
    component:SiginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
