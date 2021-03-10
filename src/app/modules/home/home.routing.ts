import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { DashboardDataResolver } from './dashboard-resolver.service';
import { HomeComponent } from './component/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
/**
 *  // {
  //   path: '',
  //   redirectTo: '/dashboard/home',
  //   pathMatch: 'full'
  // },
  // {
  //   path: '',
  //   children: [
  //     {
  //       path: 'home',
  //       component: HomeComponent
  //     }
  //   ]
  // },
 */