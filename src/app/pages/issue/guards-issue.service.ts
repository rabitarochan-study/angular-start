import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  Resolve,
  CanLoad,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { IssueComponent } from './issue.component';

@Injectable()
export class GuardsIssueService implements CanActivate, CanActivateChild, CanDeactivate<IssueComponent>, Resolve<IssueComponent>, CanLoad {

  constructor() { }

  canActivate(): boolean {
    console.log('GuardsIssueService.canActivate()');
    return true;
  }

  canActivateChild(): boolean {
    console.log('GuardsIssueService.canActivateChild()');
    return true;
  }

  canDeactivate(): boolean {
    console.log('GuardsIssueService.canDeactivate()');
    return true;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IssueComponent {
    console.log('GuardsIssueService.resolve()', route, state);
    return;
  }


  canLoad(): boolean {
    console.log('GuardsIssueService.canLoad()');
    return true;
  }
}
