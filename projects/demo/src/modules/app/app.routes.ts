import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full',
  },
  {
    path: `welcome`,
    loadChildren: () => import('./landing').then((m) => m.LandingModule),
  },
  {
    path: `getting-started`,
    loadChildren: () =>
      import('./getting-started').then((m) => m.GettingStartedModule),
  },
  { path: '**', redirectTo: '/welcome' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
