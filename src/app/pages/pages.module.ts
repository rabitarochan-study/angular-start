import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssueModule } from './issue/issue.module';
import { WikiModule } from './wiki/wiki.module';

import { PagesComponent } from './pages.component';
import { TopComponent } from './top/top.component';

import { pagesRouting, pagesRoutingProviders } from './pages.routes';
import { GuardsPagesService } from './guards-pages.service';
import { GuardsTopService } from './top/guards-top.service';
import { GuardsIssueService } from './issue/guards-issue.service';
import { GuardsWikiService } from './wiki/guards-wiki.service';

@NgModule({
  imports: [
    CommonModule,
    IssueModule,
    WikiModule,
    pagesRouting
  ],
  providers: [
    pagesRoutingProviders,
    GuardsPagesService,
    GuardsTopService,
    GuardsIssueService,
    GuardsWikiService
  ],
  declarations: [
    PagesComponent,
    TopComponent
  ]
})
export class PagesModule { }
