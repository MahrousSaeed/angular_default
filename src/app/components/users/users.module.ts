import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllUsersComponent } from './all-users/all-users.component';
import { ProfileComponent } from './profile/profile.component';
import {RouterModule,Route} from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms';
const usersRoutes:Route[] = [
  {
    path:'',
    component:AllUsersComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
]

@NgModule({
  declarations: [AllUsersComponent, ProfileComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(usersRoutes)
  ]
})
export class UsersModule { }
