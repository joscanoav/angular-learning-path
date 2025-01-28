import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,CanMatch, Route, RouterStateSnapshot, UrlSegment  } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthGuard  implements CanMatch, CanActivate {

  constructor() { }

  canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> {
    console.log('Can Match');
    console.log({route,segments})

    return false;
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    console.log('Can Activate');
    console.log({ route, state })

    return false;
  }


}
