import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'
import { UsersService } from './Services/users.service' 

@Injectable({
  providedIn: 'root'
})
export class AutentificacionGuard implements CanActivate {
  constructor(private userService:UsersService, private router:Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.userService.Token() == null){
      this.router.navigate(["/Login"],{queryParams:{urlRespuesta:state.url}});
      return false;
    }
    return true;
  }
  
}
