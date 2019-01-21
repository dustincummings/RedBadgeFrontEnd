import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
// import { Add, Operator, Map, Rxjs} from 'rxjs/operators';
import { Observable } from 'rxjs'


@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {
    constructor(
        private router: Router,
       
    ) {}

    canActivate(): Observable<boolean> {
        return new Observable<boolean>((observer) => {
            if(!sessionStorage.getItem('currentAdmin')){
                this.router.navigate(['/admin']);
                return observer.next(false);
            } else {
                return observer.next(true);
            }
        });
    
    }
}
