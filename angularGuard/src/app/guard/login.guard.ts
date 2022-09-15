import { Injectable, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class LoginGuard implements OnInit, CanActivate {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('Login guard activated!');
  }

  // If the administration component is clicked angular will activate the guard
  // to check if the user is authorised user or not.
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // TODO - Add the authentication and authorisation mechanism.
    return this.router.navigate(['/login']);
  }
}
