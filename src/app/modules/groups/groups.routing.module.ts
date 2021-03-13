import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupComponent } from './components/main/group.component';

const routes: Routes = [
  {
    path: '',
    component: GroupComponent,
    children: [
      {
        path:'',
        redirectTo: 'users',
        pathMatch: 'full' 
      },
      {
        path: 'users',
        loadChildren: () => 
          import('@modules/users/main/user-main.module').then(m => m.UserMainModule)
      },
      {
        path: 'classes',
        loadChildren: () => 
          import('@modules/class/main/classes-main.module').then(m => m.ClassMainModule)
      },
      {
        path: 'schools',
        loadChildren: () => 
          import('@modules/school/main/school-main.module').then(m => m.SchoolMainModule)
      },
      {
        path: 'regions',
        loadChildren: () => 
          import('@modules/regions/main/region-main.module').then(m => m.RegionMainModule)
      },
      {
        path: 'country',
        loadChildren: () => 
          import('@modules/country/main/country-main.module').then(m => m.CountryMainModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }
