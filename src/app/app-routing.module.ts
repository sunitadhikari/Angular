import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserResorverService } from './user-resorver.service';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      userList: UserResorverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
