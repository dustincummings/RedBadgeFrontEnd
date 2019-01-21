import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
// import { Add, Operator, Map, Rxjs} from 'rxjs/operators';
import { Observable } from 'rxjs'
import { JwtHelperService } from '@auth0/angular-jwt';



@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {
    constructor(
        private router: Router,
        private jwt: JwtHelperService
    ) {}

    canActivate(): boolean {
        const token = localStorage.getItem('id_token')
        const decodedToken = this.jwt.decodeToken(token)
        console.log(decodedToken.role)
        if (decodedToken.role !== "Admin")
        {
            this.router.navigate(['home']);
            return false;
        }

        return true;
    }
}
