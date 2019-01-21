import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { APIURL } from '../../environments/environment.prod';

// const apiUrl = ''

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`/user`);
    }

    getById(id: number) {
        return this.http.get(`/user/` + id);
    }

    signup(user: User) {
        return this.http.post(APIURL + '/user/signup', user);
    }

    update(user: User) {
        return this.http.put(`/user/` + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(`/user/` + id);
    }
}