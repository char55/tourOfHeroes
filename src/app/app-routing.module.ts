import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ReportsComponent } from './reports/reports.component';
import { ScrollingComponent } from './scrolling/scrolling.component';
import { RightclickComponent } from './rightclick/rightclick.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'scrolling', component: ScrollingComponent },
  { path: 'rightclick', component: RightclickComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
