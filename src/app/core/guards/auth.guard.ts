import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree ,Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(localStorage.getItem('token')){
        return true;
      }
    
      this.router.navigate(['login']);
      return false;
  }


  userIsLongin():boolean{
    if(localStorage.getItem('local')){
      this.router.navigate(['/home']);
      return true;
    }
    return false
  }
  
}
