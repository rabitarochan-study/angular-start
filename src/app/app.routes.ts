import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GuardsHomeService } from './home/guards-home.service';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    {
      path: 'home',
      component: HomeComponent,
      canActivate: [GuardsHomeService],
      canActivateChild: [GuardsHomeService],
      canDeactivate: [GuardsHomeService],
      resolve: [GuardsHomeService],
      canLoad: [GuardsHomeService],
    },
    { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
