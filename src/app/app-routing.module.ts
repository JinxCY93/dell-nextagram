import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { UserListComponent } from './user-list/user-list.component'
import { UserDetailComponent } from './user-detail/user-detail.component'
import { SignupPageComponent } from './signup-page/signup-page.component'
import { EditProfileComponent } from './edit-profile/edit-profile.component'

const routes: Routes = [
  { path: 'users/:userId/:username', component: UserDetailComponent },
  { path: 'editprofile', component: EditProfileComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: '', component: UserListComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
