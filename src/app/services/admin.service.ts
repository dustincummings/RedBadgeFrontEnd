import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

 const apiUrl = 'https://localhost:44311'


@Injectable()
export class AdminService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>(apiUrl + '/admin/login', { username, password} )
            .pipe(map(user => {
                if (user && user.sessionToken) {
                    sessionStorage.setItem('currentAdmin', JSON.stringify(user));
                }
                return user;
            }));
    }

    logout() {
        sessionStorage.clear();
    }

}