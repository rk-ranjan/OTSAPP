import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { RoleGuardService } from './shared/services/role-guard.service';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'orders',
        loadChildren : () => import('./module/order/order.module').then(m => m.OrderModule)
      },
      {
        path: 'settings',
        loadChildren : () => import('./module/settings/settings.module').then(m => m.SettingsModule),
        canActivate: [RoleGuardService]
      }
    ],
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    loadChildren : () => import('./module/login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
