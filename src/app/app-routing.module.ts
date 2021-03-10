import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { NoAuthGuard } from '@core/guard/no-auth.guard';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { DashboardNavsComponent } from './layout/dashboard-navs/dashboard-navs.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: ContentLayoutComponent,
    canActivate: [NoAuthGuard], // Should be replaced with actual auth guard
    children: [
      {
        path: '',
        component: DashboardLayoutComponent,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('@modules/home/home.module').then(m => m.HomeModule)
          }
        ]
      },
      {
        path: '',
        component: DashboardNavsComponent,
        children: [
          {
            path: 'about',
            loadChildren: () =>
            import('@modules/about/about.module').then(m => m.AboutModule)
          },
          {
            path: 'groups',
            loadChildren: () =>
              import('@modules/groups/groups.module').then(m => m.GroupsModule)
          },
          {
            path: 'add-class',
            loadChildren: () =>
              import('@modules/class/add/class-add.module').then(m => m.ClassAddModule)
          },
          {
            path: 'edit-class',
            loadChildren: () => 
              import('@modules/class/edit/class-edit.module').then(m=> m.ClassEditModule)
          }
        ]
      },
    ]
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('@modules/auth/auth.module').then(m => m.AuthModule)
  },
  // Fallback when no prior routes is matched
  { path: '**', redirectTo: '/auth/login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, )
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
/*
{
      relativeLinkResolution: 'legacy'
    } */