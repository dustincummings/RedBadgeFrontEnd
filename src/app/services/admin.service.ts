import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APIURL } from '../../environments/environment.prod';

//  const apiUrl = 'https://localhost:44311'


@Injectable()
export class AdminService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>(APIURL + '/Admin/Login', { username, password} )
            .pipe(map(user => {
                if (user && user.sessionToken) {
                    localStorage.setItem('currentAdmin', JSON.stringify(user));
                }
                return user;
            }));
    }

    logout() {
        localStorage.clear();
    }

}