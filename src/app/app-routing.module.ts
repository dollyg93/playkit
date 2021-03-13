import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';
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
            path: 'training',
            loadChildren: () => 
              import('@modules/training/main/training.module').then(m => m.TrainingModule)
          },
          {
            path: 'play-it',
            loadChildren: () => 
              import('@modules/task/main/task.module').then(m => m.TaskModule)
          },
          {
            path: 'assess',
            loadChildren: () => 
              import('@modules/assess/assess.module').then(m => m.AssessModule)
          },
          {
            path: 'add-class',
            loadChildren: () =>
              import('@modules/class/add/class-add.module').then(m => m.ClassAddModule)
          },
          {
            path: 'edit-class',
            loadChildren: () => 
              import('@modules/class/add/class-add.module').then(m => m.ClassAddModule)
          },
          {
            path: 'class/:id',
            loadChildren: () =>
              import('@modules/class/detail/class-detail.module').then(m => m.ClassDetailModule)
          },
          {
            path: 'users/:id',
            loadChildren: () => 
              import('@modules/users/single-detail/user-detail.module').then(m => m.UserDetailModule)
          },
          {
            path: 'users/:id/:userId',
            loadChildren: () => 
              import('@modules/users/single-detail/user-detail.module').then(m => m.UserDetailModule)
          },
          {
            path: 'add-user',
            loadChildren: () =>
              import('@modules/users/add/user-add.module').then(m => m.UserAddModule)
          },
          {
            path: 'edit-user',
            loadChildren: () => 
              import('@modules/users/add/user-add.module').then(m => m.UserAddModule)
          },
          {
            path: 'add-school',
            loadChildren: () => 
              import('@modules/school/add/school-add.module').then(m => m.SchoolAddModule)
          },
          {
            path: 'edit-school',
            loadChildren: () => 
              import('@modules/school/add/school-add.module').then(m => m.SchoolAddModule)
          },
          {
            path: 'school/:id',
            loadChildren: () => 
              import('@modules/school/details/school-details.module').then(m => m.SchoolDetailModule)
          },
          {
            path: 'add-region',
            loadChildren: () => 
              import('@modules/regions/add/region-add.module').then(m => m.RegionAddModule)
          },
          {
            path: 'edit-region',
            loadChildren: () => 
              import('@modules/regions/add/region-add.module').then(m => m.RegionAddModule)
          },
          {
            path: 'region/:id',
            loadChildren: () => 
              import('@modules/regions/details/region-details.module').then(m => m.RegionDetailModule)
          },
          {
            path: 'add-country',
            loadChildren: () => 
              import('@modules/country/add/country-add.module').then(m => m.CountryAddModule)
          },
          {
            path: 'edit-country',
            loadChildren: () => 
              import('@modules/country/add/country-add.module').then(m => m.CountryAddModule)
          },
          {
            path: 'country/:id',
            loadChildren: () => 
              import('@modules/country/details/country-details.module').then(m => m.CountryDetailModule)
          },
          {
            path: 'training-tasks',
            loadChildren: () => 
              import('@modules/training/view-training-tasks/training-task.module').then(m => m.TrainingTaskViewModule)
          },
          {
            path: 'training-tasks/add',
            loadChildren: () => 
              import('@modules/training/add-training-task/add-training-task.module').then(m => m.AddTrainingTaskViewModule)
          },
          {
            path: 'training/edit-page',
            loadChildren: () => 
              import('@modules/training/edit-main/edit-main-training.module').then(m => m.EditMainTrainingModule)
          },
          {
            path: 'play-it/edit-page',
            loadChildren: () => 
              import('@modules/task/edit-main/edit-main-task.module').then(m => m.EditMainTaskModule)
          },
          {
            path: 'play-it/add',
            loadChildren: () => 
              import('@modules/task/add/task-add.module').then(m => m.TaskAddModule)
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
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}