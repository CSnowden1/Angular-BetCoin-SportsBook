import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'sports',
        loadChildren: () => import('../sports/sports.module').then(m => m.SportsPageModule)
      },
      {
        path: 'bets',
        loadChildren: () => import('../bets/bets.module').then(m => m.BetsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/sports',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/sports',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
