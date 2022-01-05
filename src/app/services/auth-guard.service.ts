import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from './user-service.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private authService: UserServiceService,
    private router: Router) { }

canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean|undefined {
  console.log(this.authService.isAuth)
  if(this.authService.isAuth) {
    
    return true;
    
  } else {
    this.router.navigate(['']);
    return false
  }
}

}
